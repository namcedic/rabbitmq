import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create an HTTP server for REST API
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // If you need CORS support
  await app.listen(3000);
  console.log('🚀 HTTP API is running on http://localhost:3000');

  // Create the RabbitMQ microservice
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:admin@localhost:5673'],
        queue: 'book_queue',
        queueOptions: { durable: false },
      },
    });

  await microservice.listen();
  console.log('📚 Book Service (RabbitMQ) is running...');
}

bootstrap();

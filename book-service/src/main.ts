import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:admin@localhost:5673'],
        queue: 'book_queue',
        queueOptions: { durable: false },
      },
    },
  );

  await app.listen();
  console.log('📚 Book Service is running...');
}
bootstrap();

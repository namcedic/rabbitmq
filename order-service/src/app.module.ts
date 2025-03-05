import { Module } from '@nestjs/common';
import { OrderController } from './order/order.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOK_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://admin:admin@localhost:5673'],
          queue: 'book_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [OrderController],
})
export class AppModule {}

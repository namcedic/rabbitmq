import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('order')
export class OrderController {
  constructor(
    @Inject('BOOK_SERVICE') private readonly bookClient: ClientProxy,
  ) {}

  @Get('books')
  async getBooks() {
    return this.bookClient.send({ cmd: 'get_books' }, {});
  }
}

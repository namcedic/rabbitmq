import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('')
  getBooksRest() {
    return this.bookService.getAllBooks();
  }

  // RabbitMQ message pattern handler
  @MessagePattern({ cmd: 'get_books' })
  getBooksMessage() {
    return this.bookService.getAllBooks();
  }
}

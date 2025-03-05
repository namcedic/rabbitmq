import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BookService } from './book.service';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @MessagePattern({ cmd: 'get_books' })
  getBooks() {
    return this.bookService.getAllBooks();
  }
}

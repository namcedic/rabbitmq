import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  private books = [
    { id: 1, title: 'NestJS Microservices', author: 'John Doe' },
    { id: 2, title: 'RabbitMQ in Action', author: 'Jane Smith' },
  ];

  getAllBooks() {
    return this.books;
  }
}

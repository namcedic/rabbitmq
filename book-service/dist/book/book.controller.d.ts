import { BookService } from './book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getBooks(): {
        id: number;
        title: string;
        author: string;
    }[];
}

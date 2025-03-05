import { BookService } from './book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getBooksRest(): {
        id: number;
        title: string;
        author: string;
    }[];
    getBooksMessage(): {
        id: number;
        title: string;
        author: string;
    }[];
}

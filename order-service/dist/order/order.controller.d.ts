import { ClientProxy } from '@nestjs/microservices';
export declare class OrderController {
    private readonly bookClient;
    constructor(bookClient: ClientProxy);
    getBooks(): Promise<import("rxjs").Observable<any>>;
}

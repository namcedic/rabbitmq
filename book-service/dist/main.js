"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(3000);
    console.log('🚀 HTTP API is running on http://localhost:3000');
    const microservice = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
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
//# sourceMappingURL=main.js.map
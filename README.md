## 1. How to use rabbitmq
```bash

cd book-service
yarn install
cd order-service
yarn install

```

## 2. Run book service in /book-service
yarn start:dev

## 3. Run order service in /order-service
yarn start:dev

## 4. Get list book in order service using book client proxy
http://localhost:3001/order/books

## 4. Get list book in book service using api
http://localhost:3000/books
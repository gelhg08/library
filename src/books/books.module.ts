import { Module } from '@nestjs/common';
import { BooksController } from './controller/books.controller';
import { BooksService } from './services/books.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}

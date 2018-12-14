import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books/books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModel } from 'src/models/entity/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookModel])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}

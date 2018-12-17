import { Module } from '@nestjs/common';
import { BooksController } from './controller/books.controller';
import { BooksService } from './service/books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModel } from '../models/entity/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookModel])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}

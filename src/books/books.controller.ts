import { Get, Controller, Post, Body } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { BookModel } from '../models/entity/book.model';
import { BooksService } from './books/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService){}
  
  @Get('read')
  read(): any {
    return this.booksService.read();
  }
  
  @Post('create')
  create(@Body() bookJson: string): any {
    let books = plainToClass(BookModel, bookJson);
    return this.booksService.create(books);
  }
}

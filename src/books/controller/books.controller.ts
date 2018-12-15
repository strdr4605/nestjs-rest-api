import { Get, Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { BookModel } from '../../models/entity/book.entity';
import { BooksService } from '../service/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService){}
  
  @Get()
  read(): Promise<BookModel[]> {
    return this.booksService.read();
  }
  
  @Post()
  create(@Body() bookJson: string): Promise<BookModel> {
    let books = plainToClass(BookModel, bookJson);
    return this.booksService.create(books);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() bookJson: string): Promise<BookModel> {
    let book = plainToClass(BookModel, bookJson);
    return this.booksService.update(id, book);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<BookModel> {
    return this.booksService.delete(id);
  }
}

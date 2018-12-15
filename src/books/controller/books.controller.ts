import { Get, Controller, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { BookModel } from '../../models/entity/book.entity';
import { BooksService } from '../service/books.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags,
  ApiImplicitBody,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService){}
  
  @Get()
  read(): Promise<BookModel[]> {
    return this.booksService.read();
  }
  
  @Post()
  @ApiOperation({ title: 'Create book' })
  @ApiImplicitBody({name: 'Book', type: BookModel})
  create(@Body() bookJson: string): Promise<BookModel> {
    const books = plainToClass(BookModel, bookJson);
    return this.booksService.create(books);
  }

  @Put(':id')
  @ApiImplicitBody({name: 'Book', type: BookModel})
  update(@Param('id') id: string, @Body() bookJson: string): Promise<BookModel | undefined> {
    const book = plainToClass(BookModel, bookJson);
    return this.booksService.update(id, book);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<BookModel | undefined> {
    return this.booksService.delete(id);
  }
}

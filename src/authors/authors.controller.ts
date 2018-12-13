import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { AuthorsService } from './authors/authors.service';
import { AuthorModel } from '../models/entity/author.model';
import { plainToClass } from 'class-transformer';
import { ObjectID } from 'typeorm';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService){}

  @Get('read')
  read(): Promise<AuthorModel[]> {
    return this.authorsService.read();
  }
  
  @Post('create')
  create(@Body() authorJson: string): Promise<AuthorModel> {
    let authors = plainToClass(AuthorModel, authorJson);
    return this.authorsService.create(authors);
  }
  
  @Put('update/:id')
  update(@Param('id') id: ObjectID, @Body() authorJson: string): Promise<AuthorModel> {
    let book = plainToClass(AuthorModel, authorJson);
    return this.authorsService.update(id, book);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: ObjectID): Promise<AuthorModel> {
    return this.authorsService.delete(id);
  }
}

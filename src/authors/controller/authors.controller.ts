import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { AuthorsService } from '../service/authors.service';
import { AuthorModel } from '../../models/entity/author.entity';
import { plainToClass } from 'class-transformer';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService){}

  @Get()
  read(): Promise<AuthorModel[]> {
    return this.authorsService.read();
  }
  
  @Post()
  create(@Body() authorJson: string): Promise<AuthorModel> {
    const authors = plainToClass(AuthorModel, authorJson);
    return this.authorsService.create(authors);
  }
  
  @Put(':id')
  update(@Param('id') id: string, @Body() authorJson: string): Promise<AuthorModel | undefined> {
    const book = plainToClass(AuthorModel, authorJson);
    return this.authorsService.update(id, book);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<AuthorModel | undefined> {
    return this.authorsService.delete(id);
  }
}

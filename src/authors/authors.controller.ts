import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthorsService } from './authors/authors.service';
import { AuthorModel } from 'src/models/entity/author.model';
import { plainToClass } from 'class-transformer';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService){}

  @Get('read')
  read(): Promise<AuthorModel[]> {
    return this.authorsService.read();
  }
  
  @Post('create')
  create(@Body() authorJson: string): AuthorModel {
    let authors = plainToClass(AuthorModel, authorJson);
    return this.authorsService.create(authors);
  }
}

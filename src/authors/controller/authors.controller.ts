import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { AuthorsService } from '../service/authors.service';
import { AuthorModel } from '../../models/entity/author.entity';
import { plainToClass } from 'class-transformer';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiUseTags,
} from '@nestjs/swagger';


@ApiBearerAuth()
@ApiUseTags('authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService){}

  @Get()
  @ApiOperation({ title: 'Read authors' })
  read(): Promise<AuthorModel[]> {
    return this.authorsService.read();
  }
  
  @Post()
  @ApiOperation({ title: 'Create author' })
  create(@Body() authorJson: AuthorModel): Promise<AuthorModel> {
    const authors = plainToClass(AuthorModel, authorJson);
    return this.authorsService.create(authors);
  }
  
  @Put(':id')
  @ApiOperation({ title: 'Update author' })
  update(@Param('id') id: string, @Body() authorJson: AuthorModel): Promise<AuthorModel | undefined> {
    const book = plainToClass(AuthorModel, authorJson);
    return this.authorsService.update(id, book);
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete author' })
  delete(@Param('id') id: string): Promise<AuthorModel | undefined> {
    return this.authorsService.delete(id);
  }
}

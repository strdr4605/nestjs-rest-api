import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import { BooksController } from './books/books.controller';
import { AuthorsController } from './authors/authors.controller';
import { BooksService } from './books/books/books.service';
import { AuthorsService } from './authors/authors/authors.service';

@Module({
  imports: [],
  controllers: [AppController, BooksController, AuthorsController],
  providers: [AppService, DbService, BooksService, AuthorsService],
})
export class AppModule {}

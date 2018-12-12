import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books/books.service';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [BooksModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}

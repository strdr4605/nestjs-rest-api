import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), BooksModule, AuthorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books/books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModel } from '../models/entity/book.model';

describe('Books Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([BookModel])],
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: BooksController = module.get<BooksController>(BooksController);
    expect(controller).toBeDefined();
  });
});

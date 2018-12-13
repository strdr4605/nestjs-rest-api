import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books/books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModel } from '../models/entity/book.model';
import { expect } from 'chai';

describe('Books Controller', () => {
  let module: TestingModule;
  
  before(async () => {
    module = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([BookModel])],
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();
  });
  it('should be defined', (done) => {
    const controller: BooksController = module.get<BooksController>(BooksController);
    expect(controller).to.not.be.undefined;
    done();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModel } from '../../models/entity/book.model';

describe('BooksService', () => {
  let service: BooksService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([BookModel])],
      providers: [BooksService],
    }).compile();
    service = module.get<BooksService>(BooksService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

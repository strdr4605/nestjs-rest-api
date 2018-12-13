import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsService } from './authors.service';
import { AuthorModel } from '../../models/entity/author.model';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('AuthorsService', () => {
  let service: AuthorsService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([AuthorModel])],
      providers: [AuthorsService],
    }).compile();
    service = module.get<AuthorsService>(AuthorsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

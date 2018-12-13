import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors/authors.service';
import { AuthorModel } from '../models/entity/author.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { expect } from 'chai';

describe('Authors Controller', () => {
  let module: TestingModule;
  
  before(async () => {
    module = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([AuthorModel])],
      controllers: [AuthorsController],
      providers: [AuthorsService],
    }).compile();
  });
  it('should be defined', (done) => {
    const controller: AuthorsController = module.get<AuthorsController>(AuthorsController);
    expect(controller).to.not.be.undefined;
    done();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import { expect } from 'chai';

describe('AppController', () => {
  let app: TestingModule;

  before(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, DbService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.root()).to.equal('Hello World!');
    });
  });
});

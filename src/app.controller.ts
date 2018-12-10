import { Get, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './db/db.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly dbService: DbService
    ) {
      this.dbService.newConnection();
    }

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('read')
  read(): any {
    return this.dbService.read();
  }

  @Post('create')
  create(): any {
    return this.dbService.create();
  }
}

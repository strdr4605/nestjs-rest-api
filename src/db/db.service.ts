import { Injectable } from '@nestjs/common';
import { createConnection } from 'typeorm';

@Injectable()
export class DbService {
  
  async newConnection(): Promise<any> {
    return await createConnection();
  }
}

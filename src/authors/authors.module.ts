import { Module } from '@nestjs/common';
import { AuthorsController } from './controller/authors.controller';
import { AuthorsService } from './service/authors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModel } from 'src/models/entity/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorModel])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}

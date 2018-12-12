import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors/authors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModel } from 'src/models/entity/author.model';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorModel])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}

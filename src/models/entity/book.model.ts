import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { GenericModel } from './generic.model';
import { IsDate, MinLength, IsString, IsMongoId } from 'class-validator';

@Entity()
export class BookModel extends GenericModel {

  @Column()
  @IsString()
  @MinLength(2)
  title: string;

  @ObjectIdColumn()
  @IsMongoId()
  author: ObjectID;

  @Column()
  @IsString()
  @MinLength(2)
  iban: string;

  @Column()
  @IsDate()
  publishedAt: Date;
}

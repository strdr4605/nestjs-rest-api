import {Column, ObjectIdColumn, ObjectID} from 'typeorm';
import { IsDate, IsMongoId } from 'class-validator';

export class GenericModel {

  @ObjectIdColumn()
  @IsMongoId()
  id: ObjectID;

  @Column()
  @IsDate()
  createdAt: Date;

  @Column()
  @IsDate()
  updatedAt: Date;
}

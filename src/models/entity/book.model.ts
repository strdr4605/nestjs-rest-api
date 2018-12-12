import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { GenericModel } from './generic.model';

@Entity()
export class BookModel extends GenericModel {

  @Column()
  title: string;

  @ObjectIdColumn()
  author: ObjectID;

  @Column()
  iban: string;

  @Column()
  publishedAt: Date;
}

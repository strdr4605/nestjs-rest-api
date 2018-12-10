import { Entity, Column } from 'typeorm';
import { GenericModel } from './GenericModel';

@Entity()
export class BookModel extends GenericModel {

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  iban: string;

  @Column()
  publishedAt: Date;
}

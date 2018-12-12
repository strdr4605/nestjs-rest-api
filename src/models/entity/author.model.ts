import { Entity, Column } from 'typeorm';
import { GenericModel } from './generic.model';

@Entity()
export class AuthorModel extends GenericModel {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthday: Date;
}

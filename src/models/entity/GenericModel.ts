import {Column, ObjectIdColumn, ObjectID} from 'typeorm';

export class GenericModel {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}

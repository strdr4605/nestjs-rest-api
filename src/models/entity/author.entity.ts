import { Entity, Column } from 'typeorm';
import { GenericModel } from './generic.entity';
import { IsString, IsDate, MinLength } from 'class-validator';

@Entity()
export class AuthorModel extends GenericModel {

  @Column()
  @IsString()
  @MinLength(3)
  firstName: string;

  @Column()
  @IsString()
  @MinLength(3)
  lastName: string;

  @Column()
  @IsDate()
  birthday: Date;
}

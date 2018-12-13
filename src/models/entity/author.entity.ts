import { Entity, Column } from 'typeorm';
import { GenericModel } from './generic.entity';
import { IsString, IsDate, MinLength } from 'class-validator';

@Entity()
export class AuthorModel extends GenericModel {

  // @ApiModelProperty()
  @Column()
  @IsString()
  @MinLength(3)
  firstName: string;

  // @ApiModelProperty()
  @Column()
  @IsString()
  @MinLength(3)
  lastName: string;

  // @ApiModelProperty()
  @Column()
  @IsDate()
  birthday: Date;
}

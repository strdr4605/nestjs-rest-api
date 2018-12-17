import { Entity, Column } from 'typeorm';
import { GenericModel } from './generic.entity';
import { IsString, IsDate, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


@Entity()
export class AuthorModel extends GenericModel {

  @ApiModelProperty({minLength: 3, type: String, example: 'Dragos' })
  @Column()
  @IsString()
  @MinLength(3)
  firstName: string;

  @ApiModelProperty({minLength: 3, type: String, example: 'Strainu' })
  @Column()
  @IsString()
  @MinLength(3)
  lastName: string;

  @ApiModelProperty({ type: Date, example: '2018-12-12 00:00:00.000Z' })
  @Column()
  @IsDate()
  birthday: Date;
}

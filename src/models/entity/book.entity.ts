import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { GenericModel } from './generic.entity';
import { IsDate, MinLength, IsString, IsMongoId } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class BookModel extends GenericModel {

  @ApiModelProperty({minLength: 2})
  @Column()
  @IsString()
  @MinLength(2)
  title: string;

  @ApiModelProperty()
  @ObjectIdColumn()
  @IsMongoId()
  author: string;

  @ApiModelProperty({minLength: 2})
  @Column()
  @IsString()
  @MinLength(2)
  iban: string;

  @ApiModelProperty()
  @Column()
  @IsDate()
  publishedAt: Date;
}

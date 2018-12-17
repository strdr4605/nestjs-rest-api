import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { GenericModel } from './generic.entity';
import { IsDate, MinLength, IsString, IsMongoId } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class BookModel extends GenericModel {

  @ApiModelProperty({minLength: 2, type: String, example: 'title' })
  @Column()
  @IsString()
  @MinLength(2)
  title: string;

  @ApiModelProperty({ type: String, description: `typeorm mongo driver doesn't work with relations`, example: 'author._id' })
  @ObjectIdColumn()
  @IsMongoId()
  author: string;

  @ApiModelProperty({minLength: 2, type: String, example: 'iban'})
  @Column()
  @IsString()
  @MinLength(2)
  iban: string;

  @ApiModelProperty({ type: Date, example: '2018-12-12 00:00:00.000Z' })
  @Column()
  @IsDate()
  publishedAt: Date;
}

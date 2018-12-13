import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { GenericModel } from './generic.entity';
import { IsDate, MinLength, IsString, IsMongoId } from 'class-validator';

@Entity()
export class BookModel extends GenericModel {

  // @ApiModelProperty()
  @Column()
  @IsString()
  @MinLength(2)
  title: string;

  // @ApiModelProperty()
  @ObjectIdColumn()
  @IsMongoId()
  author: ObjectID;

  // @ApiModelProperty()
  @Column()
  @IsString()
  @MinLength(2)
  iban: string;

  // @ApiModelProperty()
  @Column()
  @IsDate()
  publishedAt: Date;
}

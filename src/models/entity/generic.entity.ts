import {Column, ObjectIdColumn, ObjectID} from 'typeorm';
import { IsDate, IsMongoId } from 'class-validator';

export class GenericModel {

  // @ApiModelProperty()
  @ObjectIdColumn()
  @IsMongoId()
  id: ObjectID;

  // @ApiModelProperty()
  @Column()
  @IsDate()
  createdAt: Date;

  // @ApiModelProperty()
  @Column()
  @IsDate()
  updatedAt: Date;
}

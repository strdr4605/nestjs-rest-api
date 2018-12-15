import {Column, ObjectIdColumn, ObjectID} from 'typeorm';
import { IsDate, IsMongoId } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class GenericModel {

  @ApiModelProperty()
  @ObjectIdColumn()
  @IsMongoId()
  id: ObjectID;

  @ApiModelProperty({required: false, readOnly: true})
  @Column()
  @IsDate()
  createdAt: Date;

  @ApiModelProperty({required: false, readOnly: true})
  @Column()
  @IsDate()
  updatedAt: Date;
}

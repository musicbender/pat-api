import * as moment from 'moment';
import { 
  Model, 
  IsUUID, 
  PrimaryKey, 
  Column, 
  Default
} from 'sequelize-typescript';

export default class BaseModel<T = any, T2 = any> extends Model<BaseModel> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Default(moment().toISOString())
  @Column
  createdOn: Date;

  @Default(moment().toISOString())
  @Column
  updatedOn: Date
}

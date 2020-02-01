import * as moment from 'moment';
import { 
  Model, 
  IsUUID, 
  PrimaryKey, 
  Column, 
  Default,
  DataType
} from 'sequelize-typescript';

export default class BasicHealth<T = any, T2 = any> extends Model<BasicHealth> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  value: number;

  @Default(moment().toISOString())
  @Column
  createdOn: Date;

  @Default(moment().toISOString())
  @Column
  updatedOn: Date

  @Default(moment().toISOString())
  @Column
  sampledOn: Date

  @Column
  unit: string;
}

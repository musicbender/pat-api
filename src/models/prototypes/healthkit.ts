import * as moment from 'moment';
import { 
  DataType,
  Model, 
  IsUUID, 
  PrimaryKey, 
  Column, 
  Default,
} from 'sequelize-typescript';

export default class Healthkit<T = any, T2 = any> extends Model<Healthkit> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;;

  @Default(0)
  @Column
  value: number;

  @Default('totalSampleValue')
  @Column
  valueType: string

  @Default(0)
  @Column
  totalSampleValue: number;

  @Default(0)
  @Column
  averageSampleValue: number;

  @Default(0)
  @Column
  highestSampleValue: number;

  @Default(0)
  @Column
  lowestSampleValue: number;

  @Default(moment().toISOString())
  @Column
  createdOn: Date;

  @Default(moment().toISOString())
  @Column
  updatedOn: Date

  @Default(moment().toISOString())
  @Column
  sampledOn: Date

  @Column(DataType.ARRAY(DataType.STRING))
  sources: string[];

  @Column
  unit: string;

  @Default('0.00:00:00')
  @Column
  totalDuration: string;
}
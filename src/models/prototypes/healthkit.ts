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

  @Default(0)
  @Column
  total: number;

  @Default(0)
  @Column
  average: number;

  @Default(0)
  @Column
  highestSampleValue: number;

  @Default(0)
  @Column
  lowestSampleValue: number;

  @Default(moment().toISOString())
  @Column
  createdOn: string;

  @Default(moment().toISOString())
  @Column
  updatedOn: string

  @Default(moment().toISOString())
  @Column
  sampledOn: string

  @Column(DataType.ARRAY(DataType.STRING))
  sources: string[];

  @Column
  unit: string;

  @Default('0.00:00:00')
  @Column
  totalDuration: string;
}

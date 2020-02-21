import * as moment from 'moment';
import BaseModel from './base-model';
import { 
  DataType,
  Column, 
  Default,
} from 'sequelize-typescript';

export default class Healthkit<T = any, T2 = any> extends BaseModel<Healthkit> {
  @Default(0)
  @Column({ type: DataType.FLOAT })
  value: number;

  @Default('totalSampleValue')
  @Column
  valueType: string

  @Default(0)
  @Column({ type: DataType.FLOAT })
  totalSampleValue: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  averageSampleValue: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  highestSampleValue: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  lowestSampleValue: number;

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

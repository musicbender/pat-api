import * as moment from 'moment';
import BaseModel from './base-model';
import { DataType, Column, Default, PrimaryKey } from 'sequelize-typescript';

export default class Healthkit<T = any, T2 = any> extends BaseModel<Healthkit> {
  @PrimaryKey
  @Column
  declare hkid: string;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare value: number;

  @Default('totalSampleValue')
  @Column
  declare valueType: string;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare totalSampleValue: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare averageSampleValue: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare highestSampleValue: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare lowestSampleValue: number;

  @Default(moment().toISOString())
  @Column
  declare sampledOn: Date;

  @Column(DataType.ARRAY(DataType.STRING))
  declare sources: string[];

  @Column
  declare unit: string;

  @Default('0.00:00:00')
  @Column
  declare totalDuration: string;
}

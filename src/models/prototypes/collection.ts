import * as moment from 'moment';
import BaseModel from './base-model';
import { Column, Default, Length, DataType } from 'sequelize-typescript';

export default class BaseCollection<T = any, T2 = any> extends BaseModel<BaseCollection> {
  @Column
  declare shortId: string;

  @Default('Unknown')
  @Length({ min: 1, max: 35 })
  @Column
  declare name: string;

  @Default('')
  @Length({ min: 0, max: 120 })
  @Column
  declare description: string;

  @Default([])
  @Column(DataType.ARRAY(DataType.STRING))
  declare tags: string[];

  @Default(0)
  @Column
  declare count: number;

  @Default(moment().toISOString())
  @Column
  declare sampledOn: Date;
}

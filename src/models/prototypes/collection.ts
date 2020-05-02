import * as moment from 'moment';
import BaseModel from './base-model';
import { 
  Column, 
  Default,
  Length,
  DataType
} from 'sequelize-typescript';

export default class BaseCollection<T = any, T2 = any> extends BaseModel<BaseCollection> {
  @Column
  shortId: string;

  @Default('Unknown')
  @Length({ min: 1, max: 35 })
  @Column
  name: string;

  @Default('')
  @Length({ min: 0, max: 120 })
  @Column
  description: string;

  @Default([])
  @Column(DataType.ARRAY(DataType.STRING))
  tags: string[];

  @Default(0)
  @Column
  count: number

  @Default(moment().toISOString())
  @Column
  sampledOn: Date
}

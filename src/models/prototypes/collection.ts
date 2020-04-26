import * as moment from 'moment';
import BaseModel from './base-model';
import { 
  Column, 
  Default,
  Length,
  AutoIncrement
} from 'sequelize-typescript';

export default class BaseCollection<T = any, T2 = any> extends BaseModel<BaseCollection> {
  @AutoIncrement
  @Column
  collectionId: number;

  @Default('Unknown')
  @Length({ min: 1, max: 35 })
  @Column
  name: string;

  @Default('')
  @Length({ min: 0, max: 60 })
  @Column
  description: string;

  @Default(['general'])
  @Column
  tags: string[];

  @Default(moment().toISOString())
  @Column
  sampledOn: Date
}

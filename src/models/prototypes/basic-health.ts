import * as moment from 'moment';
import BaseModel from './base-model';
import { Column, Default, DataType } from 'sequelize-typescript';

export default class BasicHealth<T = any, T2 = any> extends BaseModel<BasicHealth> {
  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare value: number;

  @Default(moment().toISOString())
  @Column
  declare sampledOn: Date;

  @Column
  declare unit: string;
}

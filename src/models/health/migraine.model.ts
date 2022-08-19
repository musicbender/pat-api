import * as moment from 'moment';
import BaseModel from '../prototypes/base-model';
import { baseTable } from '../prototypes/base-table';
const healthTypes = require('@configs/health.json');
import { Table, Column, Default, DataType } from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: healthTypes.migraine.id,
})
export default class Migraine<T = any, T2 = any> extends BaseModel<Migraine> {
  @Default(0)
  @Column
  declare painLevel: number;

  @Default(0)
  @Column
  declare auraLevel: number;

  @Default(0)
  @Column
  declare nauseaLevel: number;

  @Default([])
  @Column(DataType.ARRAY(DataType.STRING))
  declare auraTags: string[];

  @Column
  declare description: string;

  @Default('0.00:00:00')
  @Column
  declare totalDuration: string;

  @Default(moment().toISOString())
  @Column
  declare sampledOn: Date;
}

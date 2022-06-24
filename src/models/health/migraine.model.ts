import * as moment from 'moment';
import BaseModel from '../prototypes/base-model';
import { baseTable } from '../prototypes/base-table';
const healthTypes = require('@configs/health.json');
import { 
  Table,
  Column, 
  Default,
  DataType,
} from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: healthTypes.migraine.id,
})
export default class Migraine<T = any, T2 = any> extends BaseModel<Migraine> {
  @Default(0)
  @Column
  painLevel: number;

  @Default(0)
  @Column
  auraLevel: number;

  @Default(0)
  @Column
  nauseaLevel: number;

  @Default([])
  @Column(DataType.ARRAY(DataType.STRING))
  auraTags: string[]

  @Column
  description: string

  @Default('0.00:00:00')
  @Column
  totalDuration: string;

  @Default(moment().toISOString())
  @Column
  sampledOn: Date
}

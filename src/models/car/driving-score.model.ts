import * as moment from 'moment';
import { baseTable } from '../prototypes/base-table';
import BaseModel from '../prototypes/base-model';
import { Table, Column, Default } from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: 'car-driving-score',
})
export default class DrivingScore extends BaseModel<DrivingScore> {
  @Default(0)
  @Column
  declare accelerationScore: number;

  @Default(0)
  @Column
  declare coastingScore: number;

  @Default(0)
  @Column
  declare breakingScore: number;

  @Default(0)
  @Column
  declare totalScore: number;

  @Default('priusPrime')
  @Column
  declare vehicle: string;

  @Default(moment().toISOString())
  @Column
  declare sampledOn: Date;
}

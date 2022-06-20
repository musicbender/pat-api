import * as moment from 'moment';
import { baseTable } from '../prototypes/base-table';
import BaseModel from '../prototypes/base-model';
import { 
  Table,
  Column, 
  Default
} from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: 'car-driving-score',
})
export default class DrivingScore extends BaseModel<DrivingScore> {
  @Default(0)
  @Column
  accelerationScore: number;

  @Default(0)
  @Column
  coastingScore: number;

  @Default(0)
  @Column
  breakingScore: number;

  @Default(0)
  @Column
  totalScore: number;

  @Default('priusPrime')
  @Column
  vehicle: string;

  @Default(moment().toISOString())
  @Column
  sampledOn: Date;
}

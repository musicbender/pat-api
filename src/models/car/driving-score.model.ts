import * as moment from 'moment';
import BaseModel from '../prototypes/base-model';
import { 
  Table,
  Column, 
  Default
} from 'sequelize-typescript';

@Table({
  tableName: 'car-driving-score',
  createdAt: false, 
  updatedAt: false
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

  @Default('prius prime')
  @Column
  vehicle: string;

  @Default(moment().toISOString())
  @Column
  sampledOn: Date;
}

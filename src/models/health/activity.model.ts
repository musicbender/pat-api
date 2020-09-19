import * as moment from 'moment';
import { baseTable } from '../prototypes/base-table';
import BaseModel from '../prototypes/base-model';
const healthTypes = require('../../configs/health.json');
import { 
  Table,
  Column, 
  Default,
  DataType,
} from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: healthTypes.activity.id,
})
export default class Activity<T = any, T2 = any> extends BaseModel<Activity> {
  @Default(moment().toISOString())
  @Column
  sampledOn: Date;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  energy: number;

  @Default(healthTypes.activity.unit)
  @Column
  energyUnit: string;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  energyGoal: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  energyProgress: number;

  @Default(false)
  @Column
  energyComplete: boolean;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  standHours: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  standProgress: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  standGoal: number;

  @Default(false)
  @Column
  standComplete: boolean;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  exerciseMinutes: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  exerciseGoal: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  exerciseProgress: number;

  @Default(false)
  @Column
  exerciseComplete: boolean;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  ringsProgress: number;

  @Default(false)
  @Column
  ringsComplete: boolean;
}
import * as moment from 'moment';
import { baseTable } from '../prototypes/base-table';
import BaseModel from '../prototypes/base-model';
const healthTypes = require('@configs/health.json');
import { Table, Column, Default, DataType } from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: healthTypes.activity.id,
})
export default class Activity<T = any, T2 = any> extends BaseModel<Activity> {
  @Default(moment().toISOString())
  @Column
  declare sampledOn: Date;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare energy: number;

  @Default(healthTypes.activity.unit)
  @Column
  declare energyUnit: string;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare energyGoal: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare energyProgress: number;

  @Default(false)
  @Column
  declare energyComplete: boolean;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare standHours: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare standProgress: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare standGoal: number;

  @Default(false)
  @Column
  declare standComplete: boolean;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare exerciseMinutes: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare exerciseGoal: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare exerciseProgress: number;

  @Default(false)
  @Column
  declare exerciseComplete: boolean;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare ringsProgress: number;

  @Default(false)
  @Column
  declare ringsComplete: boolean;
}

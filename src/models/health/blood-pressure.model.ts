import * as moment from 'moment';
import BaseModel from '../prototypes/base-model';
import { baseTable } from '../prototypes/base-table';
const healthTypes = require('../../configs/health.json');
import { 
  Table,
  Column, 
  Default,
  DataType,
} from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: healthTypes.bloodPressure.id,
})
export default class BloodPressure<T = any, T2 = any> extends BaseModel<BloodPressure> {
  @Default(0)
  @Column({ type: DataType.FLOAT })
  diastolic: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  systolic: number;

  @Column
  unit: string;

  @Default(moment().toISOString())
  @Column
  sampledOn: Date
}

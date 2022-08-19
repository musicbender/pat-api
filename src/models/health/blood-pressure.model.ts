import * as moment from 'moment';
import BaseModel from '../prototypes/base-model';
import { baseTable } from '../prototypes/base-table';
const healthTypes = require('@configs/health.json');
import { Table, Column, Default, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: healthTypes.bloodPressure.id,
})
export default class BloodPressure<T = any, T2 = any> extends BaseModel<BloodPressure> {
  @PrimaryKey
  @Column
  declare hkid: string;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare diastolic: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare systolic: number;

  @Column
  declare unit: string;

  @Default(moment().toISOString())
  @Column
  declare sampledOn: Date;
}

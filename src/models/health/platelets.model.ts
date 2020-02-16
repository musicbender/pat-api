import BasicHealth from '../prototypes/basic-health';
import { Table, Default, Column, DataType, BelongsTo, IsUUID, ForeignKey } from 'sequelize-typescript';
import Cbc from './cbc.model';
const healthTypes = require('../../configs/health.json');

@Table({
  tableName: healthTypes.platelets.id,
  createdAt: false, 
  updatedAt: false
})
export default class Platelets<T = any, T2 = any> extends BasicHealth<Platelets> {
  @BelongsTo(() => Cbc)
  @Default(0)
  @Column({ type: DataType.FLOAT })
  value: number;

  @ForeignKey(() => Cbc)
  @IsUUID(4)
  @Column
  cbcId: string;
}

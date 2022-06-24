import BasicHealth from '../prototypes/basic-health';
import { baseTable } from '../prototypes/base-table';
import { Table, Default, Column, DataType, BelongsTo, IsUUID, ForeignKey } from 'sequelize-typescript';
import Cbc from './cbc.model';
const healthTypes = require('@configs/health.json');

@Table({
  ...baseTable,
  tableName: healthTypes.platelets.id,
})
export default class Platelets<T = any, T2 = any> extends BasicHealth<Platelets> {
  @BelongsTo(() => Cbc)
  cbc: Cbc;

  @ForeignKey(() => Cbc)
  @IsUUID(4)
  @Column
  cbcId: string;
}

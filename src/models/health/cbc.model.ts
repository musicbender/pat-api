import * as moment from 'moment';
import { baseTable } from '../prototypes/base-table';
import BaseModel from '../prototypes/base-model';
import { Table, IsUUID, ForeignKey, Column, Default, DataType, HasOne } from 'sequelize-typescript';
import Platelets from './platelets.model';

@Table({
  ...baseTable,
  tableName: 'cbc',
})
export default class Cbc extends BaseModel<Cbc> {
  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare wbcCount: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare rbcCount: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare hematrocrit: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare hgb: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare mvc: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare mch: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare mchc: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare redCellDistributionWidth: number;

  @HasOne(() => Platelets)
  declare platelets: Platelets;

  @ForeignKey(() => Platelets)
  @IsUUID(4)
  @Column
  declare plateletsId: string;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare meanPlateletVolume: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare granulocytes: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare lymphocytes: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare monocytes: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare neutrophil: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare lymphocytePercent: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare monocytePercent: number;

  @Default(moment().toISOString())
  @Column
  declare sampledOn: Date;
}

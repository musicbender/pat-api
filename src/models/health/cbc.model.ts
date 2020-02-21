import * as moment from 'moment';
import { baseTable } from '../prototypes/base-table';
import BaseModel from '../prototypes/base-model';
import { 
  Table,
  IsUUID, 
  ForeignKey,
  Column, 
  Default,
  DataType,
  HasOne
} from 'sequelize-typescript';
import Platelets from './platelets.model';

@Table({
  ...baseTable,
  tableName: 'cbc'
})
export default class Cbc extends BaseModel<Cbc> {
  @Default(0)
  @Column({ type: DataType.FLOAT })
  wbcCount: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  rbcCount: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  hematrocrit: number;
  
  @Default(0)
  @Column({ type: DataType.FLOAT })
  hgb: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  mvc: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  mch: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  mchc: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  redCellDistributionWidth: number;

  @HasOne(() => Platelets)
  platelets: Platelets;

  @ForeignKey(() => Platelets)
  @IsUUID(4)
  @Column
  plateletsId: string;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  meanPlateletVolume: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  granulocytes: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  lymphocytes: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  monocytes: number;
 
  @Default(0)
  @Column({ type: DataType.FLOAT })
  neutrophil: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  lymphocytePercent: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  monocytePercent: number;

  @Default(moment().toISOString())
  @Column
  sampledOn: Date
}

import * as moment from 'moment';
import { 
  Model, 
  IsUUID, 
  PrimaryKey, 
  Column, 
  Default,
  DataType,
  HasOne
} from 'sequelize-typescript';
import Platelets from './platelets.model';

export default class Cbc extends Model<Cbc> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

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

  @Default(0)
  @HasOne(() => Platelets)
  plateletCount: Platelets;

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
  neutrophil: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  monocyte: number;

  @Default(moment().toISOString())
  @Column
  createdOn: Date;

  @Default(moment().toISOString())
  @Column
  updatedOn: Date

  @Default(moment().toISOString())
  @Column
  sampledOn: Date
}

import * as moment from 'moment';
import { 
  Model, 
  IsUUID, 
  PrimaryKey, 
  Column, 
  Default,
  DataType,
} from 'sequelize-typescript';

export default class AverageMPG extends Model<AverageMPG> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  value: number;

  @Default('prius prime')
  @Column
  vehicle: string;

  @Default(moment().toISOString())
  @Column
  createdOn: Date;

  @Default(moment().toISOString())
  @Column
  updatedOn: Date;

  @Default(moment().toISOString())
  @Column
  sampledOn: Date;
}

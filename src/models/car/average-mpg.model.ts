import * as moment from 'moment';
import BaseModel from '../prototypes/base-model';
import { 
  Table,
  Column, 
  Default,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'car-average-mpg',
  createdAt: false, 
  updatedAt: false
})
export default class AverageMPG extends BaseModel<AverageMPG> {
  @Default(0)
  @Column({ type: DataType.FLOAT })
  value: number;

  @Default('prius-prime')
  @Column
  vehicle: string;

  @Default(moment().toISOString())
  @Column
  sampledOn: Date;
}

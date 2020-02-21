import * as moment from 'moment';
import { baseTable } from '../prototypes/base-table';
import BaseModel from '../prototypes/base-model';
import { 
  Table,
  Column, 
  Default,
  DataType
} from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: 'car-refuel',
})
export default class Refuel extends BaseModel<Refuel> {
  @Default(0)
  @Column({ type: DataType.FLOAT })
  gallons: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  cost: number;

  @Default('prius prime')
  @Column
  vehicle: string;

  @Default(moment().toISOString())
  @Column
  sampledOn: Date;
}

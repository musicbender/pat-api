import * as moment from 'moment';
import { baseTable } from '../prototypes/base-table';
import BaseModel from '../prototypes/base-model';
import { Table, Column, Default, DataType } from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: 'car-average-mpg',
})
export default class AverageMPG extends BaseModel<AverageMPG> {
  @Default(0)
  @Column({ type: DataType.FLOAT })
  declare value: number;

  @Default('priusPrime')
  @Column
  declare vehicle: string;

  @Default(moment().toISOString())
  @Column
  declare sampledOn: Date;
}

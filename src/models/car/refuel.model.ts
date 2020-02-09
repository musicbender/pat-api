import * as moment from 'moment';
import { 
  Table,
  Model, 
  IsUUID, 
  PrimaryKey, 
  Column, 
  Default,
  DataType
} from 'sequelize-typescript';

@Table({
  tableName: 'car-refuel',
  createdAt: false, 
  updatedAt: false
})
export default class Refuel extends Model<Refuel> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

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
  createdOn: Date;

  @Default(moment().toISOString())
  @Column
  updatedOn: Date;

  @Default(moment().toISOString())
  @Column
  sampledOn: Date;


}

import * as uuid from 'uuid';
import * as moment from 'moment';
import { healthTypes } from '../../configs/health.json';
import { 
  DataType,
  Model, 
  IsUUID, 
  PrimaryKey, 
  Column, 
  Table,
  Default,
  CreatedAt,
  UpdatedAt
} from 'sequelize-typescript';

@Table({
  tableName: healthTypes.steps.id,
  createdAt: false, 
  updatedAt: false
})
export default class Step extends Model<Step> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Default(0)
  @Column
  value: number;

  @Default(moment().toISOString())
  @Column
  createdOn: string;

  @Default(moment().toISOString())
  @Column
  updatedOn: string

  @Default(moment().toISOString())
  @Column
  sampledOn: string

  @Column(DataType.ARRAY(DataType.STRING))
  sources: string[];

  @Column
  unit: string;

  @Default('0.00:00:00')
  @Column
  totalDuration: string;
}

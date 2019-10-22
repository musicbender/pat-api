import * as uuid from 'uuid';
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
  tableName: healthTypes.steps.id
})
export default class Step extends Model<Step> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Default(0)
  @Column
  value: number;

  @CreatedAt
  createdOn: Date;

  @UpdatedAt
  updatedOn: Date

  @Default(Date.now())
  @Column
  sampledOn: Date;

  @Column(DataType.ARRAY(DataType.STRING))
  sources: string[];

  @Column
  unit: string;

  @Default('0.00:00:00')
  @Column
  totalDuration: string;
}

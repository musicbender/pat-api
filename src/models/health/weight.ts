import * as moment from 'moment';
const { weight } = require('../../configs/health.json');
import { 
  Model, 
  IsUUID, 
  PrimaryKey, 
  Column, 
  Default,
} from 'sequelize-typescript';

export default class Weight<T = any, T2 = any> extends Model<Weight> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;;

  @Default(0)
  @Column
  value: number;

  @Default(moment().toISOString())
  @Column
  createdOn: Date;

  @Default(moment().toISOString())
  @Column
  updatedOn: Date

  @Default(moment().toISOString())
  @Column
  sampledOn: Date

  @Default(weight.unit)
  @Column
  unit: string;
}

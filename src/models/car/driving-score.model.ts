import * as moment from 'moment';
import { 
  Model, 
  IsUUID, 
  PrimaryKey, 
  Column, 
  Default
} from 'sequelize-typescript';

export default class DrivingScore extends Model<DrivingScore> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Default(0)
  @Column
  accelerationScore: number;

  @Default(0)
  @Column
  coastingScore: number;

  @Default(0)
  @Column
  breakingScore: number;

  @Default(0)
  @Column
  totalScore: number;

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

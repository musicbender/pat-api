import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/healthkit.json');
import { DataType, Default, Column } from 'sequelize-typescript';

@Table({
  tableName: healthTypes.walkingRunningDistance.id,
  createdAt: false, 
  updatedAt: false
})
export default class WalkingRunningDistance extends HealthKit<WalkingRunningDistance> {
  @Default(0)
  @Column({ type: DataType.FLOAT })
  value: number;
  
  @Default(0)
  @Column({ type: DataType.FLOAT })
  totalSampleValue: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  averageSampleValue: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  highestSampleValue: number;

  @Default(0)
  @Column({ type: DataType.FLOAT })
  lowestSampleValue: number;
}

import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/healthkit.json');
import { DataType, Default, Column } from 'sequelize-typescript';

@Table({
  tableName: healthTypes.activeEnergy.id,
  createdAt: false, 
  updatedAt: false
})
export default class ActiveEnergy extends HealthKit<ActiveEnergy> {
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

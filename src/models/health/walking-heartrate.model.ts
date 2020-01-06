import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
import { healthTypes } from '../../configs/health.json';

@Table({
  tableName: healthTypes.walkingHeartRateAverage.id,
  createdAt: false, 
  updatedAt: false
})
export default class WalkingHeartRateAverage extends HealthKit<WalkingHeartRateAverage> {}

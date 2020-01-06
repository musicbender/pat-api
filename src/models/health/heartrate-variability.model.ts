import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
import { healthTypes } from '../../configs/health.json';

@Table({
  tableName: healthTypes.heartRateVariability.id,
  createdAt: false, 
  updatedAt: false
})
export default class HeartRateVariability extends HealthKit<HeartRateVariability> {}

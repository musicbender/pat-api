import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/health.json');

@Table({
  tableName: healthTypes.heartRateVariability.id,
  createdAt: false, 
  updatedAt: false
})
export default class HeartRateVariability extends HealthKit<HeartRateVariability> {}

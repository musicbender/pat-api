import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/health.json');

@Table({
  tableName: healthTypes.swimmingDistance.id,
  createdAt: false, 
  updatedAt: false
})
export default class SwimmingDistance extends HealthKit<SwimmingDistance> {}

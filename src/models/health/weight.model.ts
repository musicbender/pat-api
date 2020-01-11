import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/health.json');

@Table({
  tableName: healthTypes.weight.id,
  createdAt: false, 
  updatedAt: false
})
export default class Weight extends HealthKit<Weight> {}

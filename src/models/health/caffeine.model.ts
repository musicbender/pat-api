import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/health.json');

@Table({
  tableName: healthTypes.caffeine.id,
  createdAt: false, 
  updatedAt: false
})
export default class Caffeine extends HealthKit<Caffeine> {}

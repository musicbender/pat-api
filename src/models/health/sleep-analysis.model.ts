import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/health.json');

@Table({
  tableName: healthTypes.sleepAnalysis.id,
  createdAt: false, 
  updatedAt: false
})
export default class SleepAnalysis extends HealthKit<SleepAnalysis> {}

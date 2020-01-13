import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/healthkit.json');

@Table({
  tableName: healthTypes.sleepAnalysis.id,
  createdAt: false, 
  updatedAt: false
})
export default class SleepAnalysis extends HealthKit<SleepAnalysis> {}

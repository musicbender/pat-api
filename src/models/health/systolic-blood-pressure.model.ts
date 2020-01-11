import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/health.json');

@Table({
  tableName: healthTypes.systolicBloodPressure.id,
  createdAt: false, 
  updatedAt: false
})
export default class SystolicBloodPressure extends HealthKit<SystolicBloodPressure> {}

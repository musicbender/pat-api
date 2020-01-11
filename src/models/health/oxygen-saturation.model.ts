import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/health.json');

@Table({
  tableName: healthTypes.oxygenSaturation.id,
  createdAt: false, 
  updatedAt: false
})
export default class OxygenSaturation extends HealthKit<OxygenSaturation> {}

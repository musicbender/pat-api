import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/health.json');

@Table({
  tableName: healthTypes.height.id,
  createdAt: false, 
  updatedAt: false
})
export default class Height extends HealthKit<Height> {}

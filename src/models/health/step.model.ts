import HealthKit from '../prototypes/healthkit';
import { healthTypes } from '../../configs/health.json';
import { Table } from 'sequelize-typescript';

@Table({
  tableName: healthTypes.steps.id,
  createdAt: false, 
  updatedAt: false
})
export default class Step extends HealthKit<Step> {}

import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
import { healthTypes } from '../../configs/healthkit.json';

@Table({
  tableName: healthTypes.steps.id,
  createdAt: false, 
  updatedAt: false
})
export default class Step extends HealthKit<Step> {}

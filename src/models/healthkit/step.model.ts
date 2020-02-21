import { Table } from 'sequelize-typescript';
import { baseTable } from '../prototypes/base-table';
import HealthKit from '../prototypes/healthkit';
import { healthTypes } from '../../configs/healthkit.json';

@Table({
  ...baseTable,
  tableName: healthTypes.steps.id,
})
export default class Step extends HealthKit<Step> {}

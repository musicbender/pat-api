import { Table } from 'sequelize-typescript';
import { baseTable } from '../prototypes/base-table';
import HealthKit from '../prototypes/healthkit';
import { healthTypes } from '../../configs/healthkit.json';

@Table({
  ...baseTable,
  tableName: healthTypes.restingHeartRate.id,
})
export default class RestingHeartRate extends HealthKit<RestingHeartRate> {}

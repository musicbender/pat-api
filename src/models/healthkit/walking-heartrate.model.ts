import { Table } from 'sequelize-typescript';
import { baseTable } from '../prototypes/base-table';
import HealthKit from '../prototypes/healthkit';
import { healthTypes } from '../../configs/healthkit.json';

@Table({
  ...baseTable,
  tableName: healthTypes.walkingHeartRateAverage.id,
})
export default class WalkingHeartRateAverage extends HealthKit<WalkingHeartRateAverage> {}

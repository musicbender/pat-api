import { Table } from 'sequelize-typescript';
import { baseTable } from '../prototypes/base-table';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/healthkit.json');

@Table({
  ...baseTable,
  tableName: healthTypes.caffeine.id,
})
export default class Caffeine extends HealthKit<Caffeine> {}

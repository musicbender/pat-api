import { Table } from 'sequelize-typescript';
import { baseTable } from '../prototypes/base-table';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

@Table({
  ...baseTable,
  tableName: healthTypes.sleepAnalysis.id,
})
export default class SleepAnalysis extends HealthKit<SleepAnalysis> {}

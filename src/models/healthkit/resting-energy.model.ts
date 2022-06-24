import { Table } from 'sequelize-typescript';
import { baseTable } from '../prototypes/base-table';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('@configs/healthkit.json');
import { DataType, Default, Column } from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: healthTypes.restingEnergy.id,
})
export default class RestingEnergy extends HealthKit<RestingEnergy> {}

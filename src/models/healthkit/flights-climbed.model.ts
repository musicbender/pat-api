import { Table } from 'sequelize-typescript';
import { baseTable } from '../prototypes/base-table';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('@configs/healthkit.json');

@Table({
  ...baseTable,
  tableName: healthTypes.flightsClimbed.id,
})
export default class FlightsClimbed extends HealthKit<FlightsClimbed> {}

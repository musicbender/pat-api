import HealthKit from '../prototypes/healthkit';
import { healthTypes } from '../../configs/health.json';
import { Table } from 'sequelize-typescript';

@Table({
  tableName: healthTypes.flightsClimbed.id,
  createdAt: false, 
  updatedAt: false
})
export default class FlightsClimbed extends HealthKit<FlightsClimbed> {}

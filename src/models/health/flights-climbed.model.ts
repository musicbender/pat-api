import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
import { healthTypes } from '../../configs/health.json';

@Table({
  tableName: healthTypes.flightsClimbed.id,
  createdAt: false, 
  updatedAt: false
})
export default class FlightsClimbed extends HealthKit<FlightsClimbed> {}
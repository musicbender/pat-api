import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/healthkit.json');

@Table({
  tableName: healthTypes.walkingRunningDistance.id,
  createdAt: false, 
  updatedAt: false
})
export default class WalkingRunningDistance extends HealthKit<WalkingRunningDistance> {}

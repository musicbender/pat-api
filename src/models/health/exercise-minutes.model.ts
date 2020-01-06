import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/health.json');

@Table({
  tableName: healthTypes.exerciseMinutes.id,
  createdAt: false, 
  updatedAt: false
})
export default class ExerciseMinutes extends HealthKit<ExerciseMinutes> {}

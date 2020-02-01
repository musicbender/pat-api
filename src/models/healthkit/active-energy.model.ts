import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/healthkit.json');

@Table({
  tableName: healthTypes.activeEnergy.id,
  createdAt: false, 
  updatedAt: false
})
export default class ActiveEnergy extends HealthKit<ActiveEnergy> {}

import { Table } from 'sequelize-typescript';
import HealthKit from '../prototypes/healthkit';
const { healthTypes } = require('../../configs/healthkit.json');
import { DataType, Default, Column } from 'sequelize-typescript';

@Table({
  tableName: healthTypes.restingEnergy.id,
  createdAt: false, 
  updatedAt: false
})
export default class RestingEnergy extends HealthKit<RestingEnergy> {}

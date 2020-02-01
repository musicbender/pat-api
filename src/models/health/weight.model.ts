import BasicHealth from '../prototypes/basic-health';
import { Table } from 'sequelize-typescript';
const healthTypes = require('../../configs/health.json');

@Table({
  tableName: healthTypes.weight.id,
  createdAt: false, 
  updatedAt: false
})
export default class Weight<T = any, T2 = any> extends BasicHealth<Weight> {}

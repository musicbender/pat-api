import BasicHealth from '../prototypes/basic-health';
import { Table } from 'sequelize-typescript';
const healthTypes = require('../../configs/health.json');

@Table({
  tableName: healthTypes.height.id,
  createdAt: false, 
  updatedAt: false
})
export default class Height<T = any, T2 = any> extends BasicHealth<Height> {}

import BasicHealth from '../prototypes/basic-health';
import { Table } from 'sequelize-typescript';
const healthTypes = require('../../configs/health.json');

@Table({
  tableName: healthTypes.waistCircumference.id,
  createdAt: false, 
  updatedAt: false
})
export default class WaistCircumference<T = any, T2 = any> extends BasicHealth<WaistCircumference> {}

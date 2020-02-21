import BasicHealth from '../prototypes/basic-health';
import { baseTable } from '../prototypes/base-table';
import { Table } from 'sequelize-typescript';
const healthTypes = require('../../configs/health.json');

@Table({
  ...baseTable,
  tableName: healthTypes.weight.id,
})
export default class Weight<T = any, T2 = any> extends BasicHealth<Weight> {}

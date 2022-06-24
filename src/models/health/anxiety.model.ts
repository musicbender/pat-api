import * as moment from 'moment';
import BasicHealth from '../prototypes/basic-health';
import { baseTable } from '../prototypes/base-table';
const healthTypes = require('@configs/health.json');
import { Table } from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: healthTypes.anxiety.id,
})
export default class Anxiety<T = any, T2 = any> extends BasicHealth<Anxiety> {}

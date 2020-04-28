import { baseTable } from '../prototypes/base-table';
import BaseCollection from '../prototypes/collection';
import { Table, Column, Default } from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: 'collections',
})
export default class Collections extends BaseCollection<Collections> {}

import { baseTable } from '../prototypes/base-table';
import BaseCollection from '../prototypes/collection';
import { Table } from 'sequelize-typescript';

@Table({
  ...baseTable,
  tableName: 'collection-steins',
})
export default class Steins extends BaseCollection<Steins> {}

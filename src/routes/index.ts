import * as combineRouters from 'koa-combine-routers';
import test from './test';
import graphql from './graphql'
import altair from './altair';

const router = combineRouters(
  graphql,
  altair,
  test
);

export { router };

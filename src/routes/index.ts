import * as combineRouters from 'koa-combine-routers';
import test from './test';
import graphql from './graphql'

const router = combineRouters(
  graphql,
  test
)

export { router };

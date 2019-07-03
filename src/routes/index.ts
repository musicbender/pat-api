import * as combineRouters from 'koa-combine-routers';
import test from './test';

const router = combineRouters(
  test
)

export { router };

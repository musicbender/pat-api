import * as Router from 'koa-router';
import { createRouteExplorer } from 'altair-koa-middleware';

const router = new Router();

createRouteExplorer({
  url: '/altair',
  router,
  opts: {
    endpointURL: '/graphql'
  }
});

export default router;

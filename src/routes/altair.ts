import * as Router from 'koa-router';
import { createRouteExplorer } from 'altair-koa-middleware';

const router = new Router();

if (process.env.PATAPI_DISABLE_ALTAIR !== 'true') {
  createRouteExplorer({
    url: '/altair',
    router,
    opts: {
      endpointURL: '/graphql'
    }
  });
}

export default router;

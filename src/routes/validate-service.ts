import * as Router from 'koa-router';
import { restResponse } from '../utils/util';
import { KoaContext } from 'types';
const pkg = require('../../package.json');

const router = new Router();

router.get('/test', async (ctx: KoaContext): Promise<void> => {
  ctx.redirect('/health/liveness');
});

router.get('/health/liveness', async (ctx: KoaContext): Promise<void> => {
  restResponse(ctx);
});

router.get('/health/readiness', async (ctx: KoaContext): Promise<void>  => {
  if (ctx.isReady) {
    restResponse(ctx);
  } else {
    restResponse(ctx, 503, 'not ready');
  }
});

router.get('/version', async (ctx: KoaContext): Promise<void> => {
  restResponse(ctx, 200, pkg.version);
});

export default router;

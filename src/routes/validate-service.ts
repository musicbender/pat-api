import * as Router from 'koa-router';
import { restResponse } from '../utils/util';
import { KoaContext } from 'types';

const router = new Router();

router.get('/test', async (ctx: KoaContext) => {
  restResponse(ctx);
});

router.get('/health/liveliness', async (ctx: KoaContext) => {
  restResponse(ctx);
});

router.get('/health/readiness', async (ctx: KoaContext) => {
  if (ctx.isReady) {
    restResponse(ctx);
  } else {
    restResponse(ctx, 500, 'not ready');
  }
});

export default router;

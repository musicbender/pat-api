import * as Router from 'koa-router';
import { BaseContext } from 'koa';
import { restResponse } from '../utils/util';

const router = new Router();

router.get('/test', async (ctx: BaseContext) => {
  restResponse(ctx);
});

export default router;

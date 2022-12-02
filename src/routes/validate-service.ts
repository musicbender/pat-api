import * as Router from 'koa-router';
import axios from 'axios';
import { restResponse } from '@utils/util';
import { KoaContext } from '@types';
import logger from '@utils/logger';
import externalConf from '@configs/external';
const pkg = require('../../package.json');

const router = new Router();

router.get('/test', async (ctx: KoaContext): Promise<void> => {
  ctx.redirect('/health/liveness');
});

router.get('/health/liveness', async (ctx: KoaContext): Promise<void> => {
  restResponse(ctx);
});

router.get('/health/readiness', async (ctx: KoaContext): Promise<void> => {
  if (ctx.isReady) {
    restResponse(ctx);
  } else {
    restResponse(ctx, 503, 'not ready');
  }
});

router.get('/version', async (ctx: KoaContext): Promise<void> => {
  restResponse(ctx, 200, 'success', { version: pkg.version });
});

router.get('/info', async (ctx: KoaContext): Promise<void> => {
  let randomDadJoke = 'No dad jokes today.';

  try {
    const dadJokeRes = await axios.get(externalConf.urls.dadJokesApiUri, {
      headers: {
        Accept: 'text/plain',
        'User-Agent': externalConf.config.customUserAgent,
      },
    });

    randomDadJoke = dadJokeRes.data;
  } catch (err) {
    logger.error('Error fetching a dad joke', err);
  }

  logger.info('build #: ' + process.env.PATAPI_BUILD_NUMBER);
  logger.info('debug?: ' + process.env.PAT_API_DEBUG_HEROKU);

  const data = {
    version: pkg.version,
    buildNumber: process.env.PATAPI_BUILD_NUMBER,
    commitHash: process.env.PATAPI_COMMIT_HASH,
    lastDeployDate: process.env.PATAPI_LAST_DEPLOY_DATE,
    randomDadJoke,
  };

  restResponse(ctx, 200, 'success', data);
});

export default router;

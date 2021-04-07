import * as Router from 'koa-router';
import axios from 'axios';
import { restResponse } from '../utils/util';
import { KoaContext } from 'types';
const pkg = require('../../package.json');
const externalConfig = require('../configs/external.json');

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
  restResponse(ctx, 200, "success", { version: pkg.version });
});

router.get('/info', async (ctx: KoaContext): Promise<void> => {
  let randomDadJoke = "No dad jokes today.";

  try {
      const dadJokeRes = await axios.get(externalConfig.dadJokesApiUri, {
        headers: {
          "Accept": "text/plain"
        }
      });

      randomDadJoke = dadJokeRes.data;
  } catch (err) {
    console.error("Error fetching a dad joke", err);
  }

  const data = {
    version: pkg.version,
    buildNumber: process.env.PATAPI_BUILD_NUMBER,
    commitHash: process.env.PATAPI_COMMIT_HASH,
    lastDeployDate: process.env.PATAPI_LAST_DEPLOY_DATE,
    randomDadJoke
  };

  restResponse(ctx, 200, "success", data);
});

export default router;

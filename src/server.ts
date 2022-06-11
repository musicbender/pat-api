import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as winston from 'winston';
import { router } from './routes';
import {
  corsMiddleware,
  logMiddleware,
  requestIDMiddleware,
  headersMiddleware
} from './middleware';

// init
const app = new Koa();
app.context.isReady = false;

// middlewares
app.use(requestIDMiddleware);
app.use(bodyParser());
app.use(corsMiddleware());
app.use(logMiddleware(winston));
app.use(headersMiddleware);

if (process.env.PATAPI_DISABLE_HELMET !== 'true') {
  app.use(helmet());
}

// REST routes
app.use(router());

export default app;

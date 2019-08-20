import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as winston from 'winston';
import { router } from './routes';
import { connectDB } from './controllers/database';
import {
  corsMiddleware,
  logMiddleware,
  requestIDMiddleware,
  headersMiddleware
} from './middleware';

// init
const app = new Koa();

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

// connect database and start server
(async () => {
  try {
    const db = await connectDB();
  } catch (err) {
    throw new Error(`Database could not connect: ${err}`);
  }

  // start server
  app.listen(process.env.PATAPI_PORT, () => {
    console.log(`Pat API running at port ${process.env.PATAPI_PORT}`)
  });
})();

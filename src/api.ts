import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as winston from 'winston';
import * as mongoose from 'mongoose';
import { router } from './routes';
import {
  corsMiddleware,
  logMiddleware,
  requestIDMiddleware,
  headersMiddleware
} from './middleware';

// init
require('dotenv').config();

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

// mongodb
mongoose.connect(
  `mongodb://${process.env.PATAPI_DB_HOST}:${process.env.PATAPI_DB_PORT}/${process.env.PATAPI_DB_NAME}`,
  {
    useNewUrlParser: true,
    autoReconnect: true
  }
);

const db = mongoose.connection;

db.on('error', err => {
  console.error(err);
});

// REST routes
app.use(router());

// start server
app.listen(process.env.PATAPI_PORT, () => {
  console.log(`Pat API running at port ${process.env.PATAPI_PORT}`)
});

import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as winston from 'winston';
import * as mongoose from 'mongoose';
import * as mount from 'koa-mount';
import {
  corsMiddleware,
  logMiddleware,
  requestIDMiddleware
} from './middleware';
import { router } from './routes';

// init
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const app = new Koa();

// middlewares
app.use(requestIDMiddleware);
app.use(helmet());
app.use(corsMiddleware);
app.use(bodyParser());
app.use(logMiddleware(winston));

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

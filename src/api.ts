import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as cors from '@koa/cors';
import * as winston from 'winston';
import * as dotenv from 'dotenv';
import { router } from './routes';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = new Koa();

app.use(router());

app.listen(process.env.PATAPI_PORT, () => {
  console.log(`Pat API running at port ${process.env.PATAPI_PORT}`)
});

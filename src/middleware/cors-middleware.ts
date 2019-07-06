import { Context } from 'koa';
import * as cors from '@koa/cors'

const { APP_ALLOWED_ORIGINS } = process.env;

const corsMiddleware = (ctx: Context, next: () => Promise<any>): any => {
  cors();
  return next();
}

export default corsMiddleware;

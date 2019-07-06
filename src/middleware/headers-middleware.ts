import { Context } from 'koa';

const { APP_ALLOWED_ORIGINS } = process.env;

const headersMiddleware = (ctx: Context, next: () => Promise<any>): any => {
  if (ctx.originalUrl !== '/graphql') {
    const allowedOrigins = APP_ALLOWED_ORIGINS && APP_ALLOWED_ORIGINS.split(',');
    const origin = ctx.headers.origin;

    if (allowedOrigins && allowedOrigins.indexOf(origin) > -1) {
     ctx.header('Access-Control-Allow-Origin', origin);
    }

    ctx.header('Access-Control-Allow-Credentials', 'true');
    ctx.header('Access-Control-Expose-Headers', 'Content-Length');

    if (ctx.method === 'OPTIONS') {
      return ctx.sendStatus(200);
    } else {
      return next();
    }
  } else {
    return next();
  }
}

export default headersMiddleware;

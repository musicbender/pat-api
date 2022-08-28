import { Context } from 'koa';
import * as winston from 'winston';

const logMiddleware = (winstonInstance: winston.Logger) => {
  return async (ctx: Context, next: () => Promise<any>) => {
    const start = new Date().getMilliseconds();

    await next();

    const ms = new Date().getMilliseconds() - start;

    let logLevel: string;
    if (ctx.status >= 500) {
      logLevel = 'error';
    }
    if (ctx.status >= 400) {
      logLevel = 'warn';
    }
    if (ctx.status >= 100) {
      logLevel = 'info';
    }

    const msg = `${ctx.method} ${ctx.originalUrl} ${ctx.status} ${ms}ms reqID(${ctx.state.reqID})`;

    if (process.env.PATAPI_LOGGING_ENABLED === 'true') {
      winstonInstance.log(logLevel, msg);
    }
  };
};

export default logMiddleware;

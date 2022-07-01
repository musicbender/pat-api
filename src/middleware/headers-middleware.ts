import { Context } from 'koa';

const headersMiddleware = (ctx: Context, next: () => Promise<any>): any => {
  ctx.set('x-request-id', ctx.state.reqID);
  return next();
};

export default headersMiddleware;

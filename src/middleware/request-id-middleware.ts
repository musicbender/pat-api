import { v4 as uuid } from 'uuid';
import { Context } from 'koa';

const requestIDMiddleware = (ctx: Context, next: () => Promise<any>) => {
  ctx.state.reqID = uuid();
  return next();
}

export default requestIDMiddleware;

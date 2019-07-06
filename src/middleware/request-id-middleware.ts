import * as uuid from 'uuid';
import { Context } from 'koa';

const requestIDMiddleware = (ctx: Context, next: () => Promise<any>) => {

  ctx.reqID = uuid();
  return next();
}

export default requestIDMiddleware;

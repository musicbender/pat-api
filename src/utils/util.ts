import { BaseContext } from 'koa';

export const restResponse = (ctx: BaseContext, httpCode: number = 200, message: string = 'success', data: object = {}): void => {
  ctx.status = httpCode;
  ctx.body = { message, data };
}

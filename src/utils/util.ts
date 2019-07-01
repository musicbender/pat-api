import { Context } from 'koa';

export const restResponse = (ctx: Context, httpCode: number = 200, message: string = 'success', data: object = {}): void => {
  ctx
    .status(httpCode)
    .body({ message, data });
}

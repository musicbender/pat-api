import { BaseContext } from 'koa';

export const restResponse = (ctx: BaseContext, httpCode: number = 200, message: string = 'success', data: object = {}): void => {
  ctx.status = httpCode;
  ctx.body = { message, data };
}

export const convertToCamel = (string: string, pascal: boolean = false): string => {
  const converter = matches => matches[1].toUpperCase();
  let result = string.replace(/(\-\w)/g, converter);

  if (pascal) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result;
}

import { BaseContext } from 'koa';

export const restResponse = (
  ctx: BaseContext,
  httpCode = 200,
  message = 'success',
  data: object = {},
): void => {
  ctx.status = httpCode;
  ctx.body = { message, data };
};

export const convertToCamel = (str: string, pascal = false): string => {
  const converter = (matches) => matches[1].toUpperCase();
  let result = str.replace(/(\-\w)/g, converter);

  if (pascal) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result;
};

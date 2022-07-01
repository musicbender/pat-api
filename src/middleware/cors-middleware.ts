import { Context } from 'koa';
import * as cors from '@koa/cors';

const corsMiddleware = (): cors =>
  cors({
    origin: (ctx: Context): string => {
      const { PATAPI_ALLOWED_ORIGINS } = process.env;
      const { origin } = ctx.request.header;
      const validDomains = PATAPI_ALLOWED_ORIGINS.split(',');
      const isValid =
        validDomains.indexOf(origin) !== -1 ||
        PATAPI_ALLOWED_ORIGINS === '*' ||
        !PATAPI_ALLOWED_ORIGINS;
      return isValid ? origin : validDomains[0];
    },
  });

export default corsMiddleware;

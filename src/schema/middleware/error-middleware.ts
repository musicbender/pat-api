import logger from '@utils/logger';
import { ExpectedError } from '@utils/errors';

const errorMiddleware = async (resolve, root, args, context, info) => {
  if (info.excludeMiddleware) {
    return await resolve(root, args, context, info);
  }

  try {
    return await resolve(root, args, context, info);
  } catch (err) {
    if (err instanceof ExpectedError) {
      const errorOutput = {
        errorCode: err.message,
        errorDesc: err.errorDesc || err.desc || null
      };

      logger.error(`${errorOutput.errorCode} - ${errorOutput.errorDesc}`);
      return errorOutput;
    } else {
      logger.error(err);
      throw err;
    }
  }
};

export default errorMiddleware;

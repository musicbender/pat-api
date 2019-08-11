import { ExpectedError } from '../../utils/errors';

const errorMiddleware = async (resolve, root, args, context, info) => {
  if (info.excludeMiddleware) {
    return await resolve(root, args, context, info);
  }

  try {
    return await resolve(root, args, context, info);
  } catch (err) {
    if (err instanceof ExpectedError) {
      return {
        errorCode: err.message,
        errorDesc: err.errorDesc || err.desc || null
      };
    } else {
      throw err;
    }
  }
};

export default errorMiddleware;

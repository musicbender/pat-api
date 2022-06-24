const publicFields = require('@configs/public-fields.json');
import { ExpectedError } from '@utils/errors';

const authMiddleware = async (resolve, root, args, context, info): Promise<any> => {
  if (info.excludeMiddleware) {
    return await resolve(root, args, context, info);
  }

  if (!publicFields.includes(info.fieldName)) {
    if (context.headers['x-api-key'] === process.env.PATAPI_API_KEY) {
      return await resolve(root, args, context, info);
    } else {
      throw new ExpectedError('UNAUTHORIZED');
    }
  }
};

export default authMiddleware;

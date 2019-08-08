const publicFields = require('../../configs/public-fields.json');
import { ExpectedError } from '../../utils/errors';

const authMiddleware = async (resolve, root, args, context, info) => {
  console.log(`---in auth middleware---`);
  throw new ExpectedError('UNAUTHORIZED');
  // if (!publicFields.includes(info.fieldName)) {
  //
  //   // console.log(`correct api key: ${context.headers['x-api-key'] === process.env.PATAPI_API_KEY}`);
  //   //
  //   if (context.headers['x-api-key'] === process.env.PATAPI_API_KEY) {
  //     return await resolve(root, args, context, info);
  //   } else {
  //     console.log(`auth throwing error`);
  //
  //     throw new ExpectedError('ADD_HEALTH_ERROR');
  //   }
  // }
};

export default authMiddleware;

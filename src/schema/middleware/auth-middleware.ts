const publicFields = require('../../configs/public-fields.json');
import { ExpectedError } from '../../utils/errors';

const authMiddleware = async (resolve, root, args, context, info) => {
  console.log(`---in auth middleware---`);
  console.log(`fieldName: ${info.fieldName}`);

  if (info.fieldName === 'errorCode' || info.fieldName === 'errorDesc') {
    console.log('is err fields so move on')
    return await resolve(root, args, context, info);
  }

  // throw new ExpectedError('UNAUTHORIZED');
  
  console.log('trying resolve()')
  console.log(`resolve exists? ${!!resolve}`)
  return await resolve(root, args, context, info);
  
  
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

import { ExpectedError } from '../../utils/errors';

const errorMiddleware = async (resolve, root, args, context, info) => {
  console.log(`---in err middleware---`);
  console.log(`field name: ${info.fieldName}`);

  if (info.fieldName === 'errorCode' || info.fieldName === 'errorDesc') {
    console.log('is err fields so move on')
    return await resolve(root, args, context, info);
  }

  try {
    console.log('trying resolve()')
    console.log(`resolve exists? ${!!resolve}`)
    return await resolve(root, args, context, info);
  } catch (err) {
    console.log(`got an err`);
    console.log(err);
    console.log(`is expected: ${err instanceof ExpectedError}`);

    if (err instanceof ExpectedError) {
      // temp
      const out = {
        errorCode: err.message,
        errorDesc: err.errorDesc || err.desc || null
      };

      console.log(`ok sending graphql error`);
      console.log(out);

      return out;
    } else {
      console.log(`oh, throwing regs err`);
      throw err;
    }
  }
};

export default errorMiddleware;

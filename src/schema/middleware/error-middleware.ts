import { ExpectedError } from '../../utils/errors';

const errorMiddleware = async (resolve, root, args, context, info) => {
  console.log(`---in err middleware---`);
  try {
    return await resolve(root, args, context, info);
  } catch (err) {

    console.log(`got an err`);
    console.log(err);
    console.log(`is expected: ${err instanceof ExpectedError}`);

    if (err instanceof ExpectedError) {

      console.log(`ok sending graphql error`);
      console.log({
        errorCode: err.message,
        errorDesc: err.errorDesc || err.desc || null
      });

      return {
        errorCode: err.message,
        errorDesc: err.errorDesc || err.desc || null
      };
    } else {
      console.log(`oh, throwing regs err`);
      throw err;
    }
  }
};

export default errorMiddleware;

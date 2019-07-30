import { ExpectedError } from '../../utils/errors';

const errorMiddleware = async (resolve, root, args, context, info) => {
  console.log(`in error middleware`);
  
  try {
    console.log(`trying`);
    return await resolve(root, args, context, info);
  } catch (err) {
    console.log(`catch`);
    console.log(err);
    console.log(`error instance of expectedError?`);
    console.log(err instanceof ExpectedError);

    if (err instanceof ExpectedError) {
      return {
        errorCode: err.message,
        errorDesc: err.errorDesc || err.desc || null
      };
    } else {
      console.log(`nope...`);
      throw err;
    }
  }
};

export default errorMiddleware;

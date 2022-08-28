import { GraphQLUnionType } from 'graphql';
import { ErrorType, ResponseType } from '@schema/types';

const ResponseUnionType = (options: any) => {
  const errorType = ErrorType(`${options.name}Error`);
  const responseType = ResponseType(options.name, options.responseType);
  return new GraphQLUnionType({
    name: `${options.name}Union`,
    description: `Return either be response data or error data for ${options.name}`,
    types: [responseType, errorType],
    resolveType: (value) => {
      if (Object.prototype.hasOwnProperty.call(value, 'errorCode')) return errorType;
      return responseType;
    },
  });
};

export default ResponseUnionType;

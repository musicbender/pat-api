import { GraphQLUnionType } from 'graphql';

const ResponseType = (options: any) => {
  return new GraphQLUnionType({
    name: options.name,
    description: 'Can either be response data or error data',
    types: [ options.responseType, options.errorType ],
    resolveType: (value) => {
      if (Object.prototype.hasOwnProperty.call(value, 'errorCode')) {
        return options.errorType;
      }

      return options.responseType;
    }
  });
};

export default ResponseType;

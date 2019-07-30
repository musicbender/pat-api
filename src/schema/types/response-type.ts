import { GraphQLUnionType } from 'graphql';

const ResponseType = (options: any) => {
  return new GraphQLUnionType({
    name: options.name,
    description: options.description,
    types: [ options.responseType, options.errorType ],
    resolveType: (value) => {
      console.log(`in response type`);
      console.log('value:');
      console.log(value);

      if (Object.prototype.hasOwnProperty.call(value, 'errorCode')) {
        console.log(`is error`);
        return options.errorType;
      }

      console.log(`not error`);
      return options.responseType;
    }
  });
};

export default ResponseType;

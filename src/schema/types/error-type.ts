import { GraphQLObjectType, GraphQLString } from 'graphql';

const ErrorType = (name, enumType) => {
  return new GraphQLObjectType({
    name,
    fields: {
      errorCode: {
        type: enumType,
      },
      errorDesc: {
        type: GraphQLString,
      }
    },
  })
};

export default ErrorType;

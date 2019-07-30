import { GraphQLObjectType, GraphQLString } from 'graphql';

const ErrorType = (name: string, enumType: any): any => {
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

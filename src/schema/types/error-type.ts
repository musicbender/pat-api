import { GraphQLObjectType, GraphQLEnumType, GraphQLString } from 'graphql';
const errors = require('../../configs/error-codes.json');

const ErrorType = (name: string): GraphQLObjectType => {
  const errorCodesType = new GraphQLEnumType({
    name: 'errorCodesType',
    values: { ...errors }
  });

  return new GraphQLObjectType({
    name,
    fields: {
      errorCode: {
        type: errorCodesType,
      },
      errorDesc: {
        type: GraphQLString,
      }
    },
  })
};

export default ErrorType;

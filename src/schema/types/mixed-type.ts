import { GraphQLScalarType } from 'graphql';

const GraphQLMixed = new GraphQLScalarType({
  name: 'GraphQLMixed',
  description: 'For mixed content',
  serialize: value => value,
  parseValue: value => value,
  parseLiteral: ast => ast.value
});

export default GraphQLMixed;

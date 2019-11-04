import { GraphQLObjectType } from 'graphql';

const ResponseType = (name: string, type: any): GraphQLObjectType => {
  return new GraphQLObjectType({
    name: `${name}Response`,
    description: `Response data for ${name}`,
    fields: () => ({
      response: { type }
    })
  });
}

export default ResponseType;
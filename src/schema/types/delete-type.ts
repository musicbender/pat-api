import { GraphQLObjectType, GraphQLString } from 'graphql';

export const DeleteType = new GraphQLObjectType({
  name: 'DeleteType',
  description: 'Item deletetion response',
  fields: () => ({
    id: { type: GraphQLString },
    configID: { type: GraphQLString },
  }),
});

import { GraphQLObjectType } from 'graphql';

// mutations
import * as healthMutations from './health';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...healthMutations
  }
});

export default mutation;

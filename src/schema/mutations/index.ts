import { GraphQLObjectType } from 'graphql';
import * as healthkitMutations from './healthkit';
import * as healthMutations from './health';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...healthkitMutations,
    ...healthMutations
  }
});

export default mutation;

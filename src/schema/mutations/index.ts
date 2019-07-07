import { GraphQLObjectType } from 'graphql';

// mutations
import { addStep } from './health';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addStep
  }
});

export default mutation;

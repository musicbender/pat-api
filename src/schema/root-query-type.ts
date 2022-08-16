import { GraphQLObjectType } from 'graphql';
import * as queries from './queries';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => queries,
});

export default RootQueryType;

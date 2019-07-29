import { GraphQLSchema } from 'graphql';
import RootQueryType from './root-query-type';
import mutations from './mutations';

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations,
});

export default schema;

import { GraphQLSchema } from 'graphql';
import { applyMiddleware } from 'graphql-middleware';
import RootQueryType from './root-query-type';
import mutations from './mutations';
import { excludeMiddleware, errorMiddleware, authMiddleware } from './middleware';

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations,
});

export default applyMiddleware(schema, excludeMiddleware, errorMiddleware, authMiddleware);

// import { GraphQLSchema } from 'graphql';
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import RootQueryType from './root-query-type';
import mutations from './mutations';

const schema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: mutations,
  // query: new GraphQLObjectType({
  //   name: 'RootQueryType',
  //   fields: {
  //     hello: {
  //       type: GraphQLString,
  //       resolve() {
  //         return 'world';
  //       }
  //     }
  //   }
  // })
});

export default schema;

//
// var schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       hello: {
//         type: GraphQLString,
//         resolve() {
//           return 'world';
//         }
//       }
//     }
//   })
// });
//
// export default schema;

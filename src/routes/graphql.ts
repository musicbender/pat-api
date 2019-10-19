import * as Router from 'koa-router';
import * as graphqlHTTP from 'koa-graphql';
import * as bodyParser from 'koa-bodyparser';
import schema from '../schema';

const router = new Router();

router.all(
  '/graphql',
  bodyParser(),
  graphqlHTTP({
    schema,
    graphiql: false,
    pretty: process.env.NODE_ENV === 'development'
  })
);

router.allowedMethods();

export default router;

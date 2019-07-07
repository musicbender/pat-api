import * as Router from 'koa-router';
import * as graphqlHTTP from 'koa-graphql';
import * as bodyParser from 'koa-bodyparser';
import schema from '../schema';
import { Context } from 'koa';

const router = new Router();

router.post(
  '/graphql',
  bodyParser(),
  graphqlHTTP((ctx: Context) => ({
    schema,
    graphiql: false,
    context: {
      ctx,
    },
    pretty: process.env.NODE_ENV === 'development'
  }))
);

export default router;

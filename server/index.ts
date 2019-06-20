import { ApolloServer, gql, PubSub } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { users } from './database/db';
import cookieParser from 'cookie-parser';
import cookie from 'cookie';
import schema from './schema';

const app = express();

const origin = process.env.ORIGIN || 'http://localhost:3000';
app.use(cors({ credentials: true, origin }));

app.use(bodyParser.json());
app.use(cookieParser());

const pubsub = new PubSub();
const server = new ApolloServer({
  schema,
  context: (session: any) => {
    // Access the request object
    let req = session.connection
      ? session.connection.context.request
      : session.req;
    // It's subscription
    if (session.connection) {
      req.cookies = cookie.parse(req.headers.cookie || '');
    }
    return {
      currentUser: users.find(u => u.id === req.cookies.currentUserId),
      pubsub,
    };
  },
  subscriptions: {
    onConnect(params, ws, ctx) {
      // pass the request object to context
      return {
        request: ctx.request,
      };
    },
  },
});

server.applyMiddleware({
  app,
  path: '/graphql',
  cors: { credentials: true, origin },
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 4000;

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

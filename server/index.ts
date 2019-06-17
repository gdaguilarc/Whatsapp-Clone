import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema';
import cors from 'cors';
import { chats } from './database/db';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/chats', (req, res) => {
  res.json(chats);
});

const server = new ApolloServer({ schema });

server.applyMiddleware({
  app,
  path: '/graphql',
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

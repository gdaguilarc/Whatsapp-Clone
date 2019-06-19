import { PubSub } from 'apollo-server-express';
import { User } from './database/db';

export type MyContext = {
  pubsub: PubSub;
  currentUser: User;
};

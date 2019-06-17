import { GraphQLDateTime } from 'graphql-iso-date';
import { chats, messages } from '../database/db';

const resolvers = {
  Date: GraphQLDateTime,
  Chat: {
    lastMessage(chat: any) {
      return messages.find(m => m.id === chat.lastMessage.id);
    },
  },
  Query: {
    chats() {
      return chats;
    },
  },
};

export default resolvers;

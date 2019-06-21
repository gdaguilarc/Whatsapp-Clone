/* eslint-disable */
import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as ReactApolloHooks from 'react-apollo-hooks';
export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  lastMessage?: Maybe<Message>;
  messages: Array<Message>;
  participants: Array<User>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  chat?: Maybe<Chat>;
  sender?: Maybe<User>;
  recipient?: Maybe<User>;
  isMine: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMessage?: Maybe<Message>;
  addChat?: Maybe<Chat>;
  removeChat?: Maybe<Scalars['ID']>;
};

export type MutationAddMessageArgs = {
  chatId: Scalars['ID'];
  content: Scalars['String'];
};

export type MutationAddChatArgs = {
  recipientId: Scalars['ID'];
};

export type MutationRemoveChatArgs = {
  chatId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  chats: Array<Chat>;
  chat?: Maybe<Chat>;
  users: Array<User>;
};

export type QueryChatArgs = {
  chatId: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messageAdded: Message;
  chatAdded: Chat;
  chatRemoved: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
};
export type AddChatMutationVariables = {
  recipientId: Scalars['ID'];
};

export type AddChatMutation = { __typename?: 'Mutation' } & {
  addChat: Maybe<{ __typename?: 'Chat' } & ChatFragment>;
};

export type RemoveChatMutationVariables = {
  chatId: Scalars['ID'];
};

export type RemoveChatMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'removeChat'
>;

export type GetChatQueryVariables = {
  chatId: Scalars['ID'];
};

export type GetChatQuery = { __typename?: 'Query' } & {
  chat: Maybe<{ __typename?: 'Chat' } & FullChatFragment>;
};

export type AddMessageMutationVariables = {
  chatId: Scalars['ID'];
  content: Scalars['String'];
};

export type AddMessageMutation = { __typename?: 'Mutation' } & {
  addMessage: Maybe<{ __typename?: 'Message' } & MessageFragment>;
};

export type UsersListQueryVariables = {};

export type UsersListQuery = { __typename?: 'Query' } & {
  users: Array<{ __typename?: 'User' } & UserFragment>;
};

export type ChatFragment = { __typename?: 'Chat' } & Pick<
  Chat,
  'id' | 'name' | 'picture'
> & { lastMessage: Maybe<{ __typename?: 'Message' } & MessageFragment> };

export type FullChatFragment = { __typename?: 'Chat' } & {
  messages: Array<{ __typename?: 'Message' } & MessageFragment>;
} & ChatFragment;

export type MessageFragment = { __typename?: 'Message' } & Pick<
  Message,
  'id' | 'createdAt' | 'content' | 'isMine'
> & { chat: Maybe<{ __typename?: 'Chat' } & Pick<Chat, 'id'>> };

export type UserFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name' | 'picture'
>;

export type ChatsQueryVariables = {};

export type ChatsQuery = { __typename?: 'Query' } & {
  chats: Array<{ __typename?: 'Chat' } & ChatFragment>;
};

export type ChatAddedSubscriptionVariables = {};

export type ChatAddedSubscription = { __typename?: 'Subscription' } & {
  chatAdded: { __typename?: 'Chat' } & ChatFragment;
};

export type ChatRemovedSubscriptionVariables = {};

export type ChatRemovedSubscription = { __typename?: 'Subscription' } & Pick<
  Subscription,
  'chatRemoved'
>;

export type MessageAddedSubscriptionVariables = {};

export type MessageAddedSubscription = { __typename?: 'Subscription' } & {
  messageAdded: { __typename?: 'Message' } & MessageFragment;
};
export const MessageFragmentDoc = gql`
  fragment Message on Message {
    id
    createdAt
    content
    isMine
    chat {
      id
    }
  }
`;
export const ChatFragmentDoc = gql`
  fragment Chat on Chat {
    id
    name
    picture
    lastMessage {
      ...Message
    }
  }
  ${MessageFragmentDoc}
`;
export const FullChatFragmentDoc = gql`
  fragment FullChat on Chat {
    ...Chat
    messages {
      ...Message
    }
  }
  ${ChatFragmentDoc}
  ${MessageFragmentDoc}
`;
export const UserFragmentDoc = gql`
  fragment User on User {
    id
    name
    picture
  }
`;
export const AddChatDocument = gql`
  mutation AddChat($recipientId: ID!) {
    addChat(recipientId: $recipientId) {
      ...Chat
    }
  }
  ${ChatFragmentDoc}
`;
export type AddChatMutationFn = ReactApollo.MutationFn<
  AddChatMutation,
  AddChatMutationVariables
>;

export function useAddChatMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AddChatMutation,
    AddChatMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<
    AddChatMutation,
    AddChatMutationVariables
  >(AddChatDocument, baseOptions);
}
export const RemoveChatDocument = gql`
  mutation RemoveChat($chatId: ID!) {
    removeChat(chatId: $chatId)
  }
`;
export type RemoveChatMutationFn = ReactApollo.MutationFn<
  RemoveChatMutation,
  RemoveChatMutationVariables
>;

export function useRemoveChatMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    RemoveChatMutation,
    RemoveChatMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<
    RemoveChatMutation,
    RemoveChatMutationVariables
  >(RemoveChatDocument, baseOptions);
}
export const GetChatDocument = gql`
  query GetChat($chatId: ID!) {
    chat(chatId: $chatId) {
      ...FullChat
    }
  }
  ${FullChatFragmentDoc}
`;

export function useGetChatQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<GetChatQueryVariables>,
) {
  return ReactApolloHooks.useQuery<GetChatQuery, GetChatQueryVariables>(
    GetChatDocument,
    baseOptions,
  );
}
export const AddMessageDocument = gql`
  mutation AddMessage($chatId: ID!, $content: String!) {
    addMessage(chatId: $chatId, content: $content) {
      ...Message
    }
  }
  ${MessageFragmentDoc}
`;
export type AddMessageMutationFn = ReactApollo.MutationFn<
  AddMessageMutation,
  AddMessageMutationVariables
>;

export function useAddMessageMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AddMessageMutation,
    AddMessageMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<
    AddMessageMutation,
    AddMessageMutationVariables
  >(AddMessageDocument, baseOptions);
}
export const UsersListDocument = gql`
  query UsersList {
    users {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

export function useUsersListQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<UsersListQueryVariables>,
) {
  return ReactApolloHooks.useQuery<UsersListQuery, UsersListQueryVariables>(
    UsersListDocument,
    baseOptions,
  );
}
export const ChatsDocument = gql`
  query Chats {
    chats {
      ...Chat
    }
  }
  ${ChatFragmentDoc}
`;

export function useChatsQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<ChatsQueryVariables>,
) {
  return ReactApolloHooks.useQuery<ChatsQuery, ChatsQueryVariables>(
    ChatsDocument,
    baseOptions,
  );
}
export const ChatAddedDocument = gql`
  subscription ChatAdded {
    chatAdded {
      ...Chat
    }
  }
  ${ChatFragmentDoc}
`;

export function useChatAddedSubscription(
  baseOptions?: ReactApolloHooks.SubscriptionHookOptions<
    ChatAddedSubscription,
    ChatAddedSubscriptionVariables
  >,
) {
  return ReactApolloHooks.useSubscription<
    ChatAddedSubscription,
    ChatAddedSubscriptionVariables
  >(ChatAddedDocument, baseOptions);
}
export const ChatRemovedDocument = gql`
  subscription ChatRemoved {
    chatRemoved
  }
`;

export function useChatRemovedSubscription(
  baseOptions?: ReactApolloHooks.SubscriptionHookOptions<
    ChatRemovedSubscription,
    ChatRemovedSubscriptionVariables
  >,
) {
  return ReactApolloHooks.useSubscription<
    ChatRemovedSubscription,
    ChatRemovedSubscriptionVariables
  >(ChatRemovedDocument, baseOptions);
}
export const MessageAddedDocument = gql`
  subscription MessageAdded {
    messageAdded {
      ...Message
    }
  }
  ${MessageFragmentDoc}
`;

export function useMessageAddedSubscription(
  baseOptions?: ReactApolloHooks.SubscriptionHookOptions<
    MessageAddedSubscription,
    MessageAddedSubscriptionVariables
  >,
) {
  return ReactApolloHooks.useSubscription<
    MessageAddedSubscription,
    MessageAddedSubscriptionVariables
  >(MessageAddedDocument, baseOptions);
}

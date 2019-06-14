import React from 'react';
import ChatsList from './ChatList';
import ChatsNavBar from './ChatsNavBar';

const ChatListScreen: React.FC = () => {
  return (
    <>
      <ChatsNavBar />
      <ChatsList />
    </>
  );
};

export default ChatListScreen;

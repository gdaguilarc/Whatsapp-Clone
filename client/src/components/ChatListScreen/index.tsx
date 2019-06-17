import React from 'react';
import ChatsList from './ChatList';
import ChatsNavBar from './ChatsNavBar';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
`;

const ChatListScreen: React.FC = () => {
  return (
    <>
      <Container>
        <ChatsNavBar />
        <ChatsList />
      </Container>
    </>
  );
};

export default ChatListScreen;

import React from 'react';
import ChatsList from './ChatList';
import ChatsNavBar from './ChatsNavBar';
import styled from 'styled-components';
import { History } from 'history';

const Container = styled.div`
  height: 100vh;
`;

interface ChatsListProps {
  history: History;
}

const ChatListScreen: React.FC<ChatsListProps> = ({ history }) => {
  return (
    <>
      <Container>
        <ChatsNavBar history={history} />
        <ChatsList history={history} />
      </Container>
    </>
  );
};

export default ChatListScreen;

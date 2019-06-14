import React from 'react';
import ChatList from './ChatList';
import ChatsNavBar from './ChatsNavBar';

const App: React.FC = () => {
  return (
    <div>
      <ChatsNavBar />
      <ChatList />
    </div>
  );
};

export default App;

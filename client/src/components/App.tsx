import React from 'react';
import ChatListScreen from './ChatListScreen';
import ChatRoomScreen from './ChatRoomScreen';
import {
  BrowserRouter,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import AnimatedSwitch from './AnimatedSwitch';
import { useCacheService } from '../services/cache.service';

const App: React.FC = () => {
  useCacheService();
  return (
    <BrowserRouter>
      <AnimatedSwitch>
        <Route exact path="/chats" component={ChatListScreen} />
        <Route
          exact
          path="/chats/:chatId"
          component={({
            match,
            history,
          }: RouteComponentProps<{ chatId: string }>) => (
            <ChatRoomScreen chatId={match.params.chatId} history={history} />
          )}
        />
      </AnimatedSwitch>
      <Route exact path="/" render={redirectToChats} />
    </BrowserRouter>
  );
};

const redirectToChats = () => <Redirect to="/chats" />;

export default App;

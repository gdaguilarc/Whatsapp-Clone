import React from 'react';
import ChatListScreen from './ChatListScreen';
import ChatRoomScreen from './ChatRoomScreen';
import AuthScreen from './AuthScreen';
import {
  BrowserRouter,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import AnimatedSwitch from './AnimatedSwitch';
import ChatCreationScreen from './ChatCreationScreen';
import { withAuth } from '../services/auth.service';

const App: React.FC = () => (
  <BrowserRouter>
    <AnimatedSwitch>
      <Route exact path="/sign-(in|up)" component={AuthScreen} />
      <Route exact path="/chats" component={withAuth(ChatListScreen)} />
      <Route
        exact
        path="/chats/:chatId"
        component={withAuth(
          ({ match, history }: RouteComponentProps<{ chatId: string }>) => (
            <ChatRoomScreen chatId={match.params.chatId} history={history} />
          ),
        )}
      />
      <Route exact path="/new-chat" component={withAuth(ChatCreationScreen)} />
    </AnimatedSwitch>
    <Route exact path="/" render={redirectToChats} />
  </BrowserRouter>
);

const redirectToChats = () => <Redirect to="/chats" />;

export default App;

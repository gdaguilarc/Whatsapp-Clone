import React from 'react';
import moment from 'moment';
import { chats } from '../../database/db';

function ChatsList() {
  return (
    <>
      <ul>
        {chats.map(chat => (
          <li key={chat.id}>
            <img src={chat.picture} alt="profile" />
            <div>{chat.name}</div>
            {chat.lastMessage && (
              <React.Fragment>
                <div className="ChatsList-last-message">
                  {chat.lastMessage.content}
                </div>
                <div className="ChatsList-timestamp">
                  {moment(chat.lastMessage.createdAt).format('HH:mm')}
                </div>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ChatsList;

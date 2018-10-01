import React from 'react';
import ReactDOM from 'react-dom';

import Message from './components/Message';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import RoomList from './components/RoomList';


const App = ()=> {
	return(<div className="app">
                <RoomList />
                <MessageList />
                <SendMessageForm />
                <NewRoomForm />
            </div>
	);
}

ReactDOM.render(
      <App />
  
  , document.querySelector('.container'));

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Message from './components/Message';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import RoomList from './components/RoomList';
import { tokenUrl, instanceLocator } from './config'

import Chatkit from '@pusher/chatkit'

class App extends Component{
	constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    } 
	componentDieMount(){
		const chatManager = new Chatkit.ChatManager({
		instanceLocator,
		userId:'MonikaP',
		tokenProvider : new Chatkit.TokenProvider({url:tokenUrl})
				
		})
		chatManager.connect()
		.then(currentUser => { 
			this.currentUser = currentUser
			this.currentUser.subscribeToRoom({
			roomId:17620316,
			hooks:{
				onNewMessage: message=>{
					console.log('message.text: ', message.text);
					this.setState({messages:[...this.state.messages, message]})
				}
			}
		})})
	}
	
	sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: 17620316
        })
    }
	
	
	render(){
		return(<div className="app">
                <RoomList />
                <MessageList messages={this.state.messages} />
                <SendMessageForm sendMessage={this.sendMessage} />
                <NewRoomForm />
            </div>
	);
	}
}


ReactDOM.render(
      <App />
  
  , document.querySelector('.container'));

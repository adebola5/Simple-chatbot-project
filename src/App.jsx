import { useState } from 'react'
import ChatMessages from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import RobotProfileImage from './assets/robot.jpg';
import UserProfileImage from './assets/user.jpg';
import './App.css'

     
//this is the component that will be rendered, meaning the component that holds all the UI elements to be rendered
      function App() {
        const [chatMessages, setChatMessages] =useState([
          //the arrays holding the messages, id is needed whenever arrays and the .map() function are used in react
          {
            message: "hello Chatbot",
            sender: "user",
            id: "id1",
          },
          {
            message: "Hello! How can I help you?",
            sender: "robot",
            id: "id2",
          },
        ]);

        
        return (
          //the function to be rendered must call the chatInput and the ChatMessages functions, since both need to be displayed
          <div className="app-container">
            <ChatMessages
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
              
            />

            <ChatInput //set the props to be passed to the same value as their state in this component
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
              
            />
          </div>
        );
      }


export default App

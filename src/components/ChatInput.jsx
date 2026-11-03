import { useState} from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");

        function SaveInputText(event) {
          //event contains details about the event or change
          setInputText(event.target.value); //target brings out the element and value brings out the value of the input element
        }

        function sendMessage() {
          //create a new variable to hold the chatMessages and the one the user entered
          const newChatMessages = [
            ...chatMessages,
            {
              //duplicates the existing chat message and the user input, so they can both be displayed
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(), //these are the new values that are to be added in the chatMessages
            },
          ];

          //this function is the one used to send a message and add it to the list of messages
          //send the variable with the changes to the updater function so the changes can happen
          setChatMessages(newChatMessages);

          setChatMessages([
            ...newChatMessages, //duplicate the existing chatMessage including the one with the user's input to preserve the state
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID(), //these are the new values that are to be added in the chatMessages
            },
          ]);
          setInputText("");
        }

        const response = Chatbot.getResponse(inputText);
        console.log(response);
        return (
          <div className="chat-input-container">
            <input
              placeholder="Send a message to chatbot"
              size="30"
              onChange={SaveInputText}
              value={inputText}
              className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">
              Send
            </button>
          </div>
        );
      }
 import { useRef, useEffect } from 'react'
 import { ChatMessage } from './ChatMessage';
 import './ChatMessages.css';
 //this is the component that's holding the array of the message and sender that will be sent to the ChatMessage function
  function ChatMessages({ chatMessages }) {

        let chatMessagesRef = useRef(null);
        useEffect(() =>{
          const containerElem = chatMessagesRef.current;

          if(containerElem){
            //means, how far from the top should we scroll = the total height of the element , so scroll as long as the total height of the element
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [chatMessages])

        return (
          <div className = "chat-messages-container"
          ref ={chatMessagesRef}>
            {
              //converting a chatMessages(array) object into a chat messages component.
              //the map holds the value at the current index and transforms it.
              chatMessages.map((chatMessage) => {
                return (
                  //calls the chatMessage function, then passes the message and sender attrinutes as required by the function
                  <ChatMessage
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                    key={chatMessage.id}
                  />
                );
              })
            }
          </div>
        );
      }

      export default ChatMessages; //this statement makes the ChatMessages component accessible to other files

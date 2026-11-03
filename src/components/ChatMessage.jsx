 import RobotProfileImage from '../assets/robot.jpg';
import UserProfileImage from '../assets/user.jpg';
import './ChatMessage.css';
 //this component is for the reply and the chat logo
export function ChatMessage({ message, sender }) {
        return (
          //If the sender of the mesage is the robot display the image first then message,
          //if the sender of the mesage is not the robot, display the message , then check if its a user , if it is then display the image then the message
          <div
            className={
              sender === "user" ? "chat-message-user" : "chat-message-robot"
            }
          >
            {sender === "robot" && (
              <img src={RobotProfileImage} className="chat-message-profile" />
            )}
            <div className="chat-message-text">{message}</div>
            {sender === "user" && (
              <img src={UserProfileImage} className="chat-message-profile" />
            )}
          </div>
        );
      }
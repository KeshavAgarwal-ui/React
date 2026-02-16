import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'



export function ChatMessage({ message, sender }){
    // const message = props.message;
    // const sender = props.sender;
    // const { message, sender } = props;

    /*
    if(sender==='robot'){
        return (
        <div>
            <img src="images/robot.png" alt="robot profile image" width="50" />
            {message}
        </div>
        );
    }
    */

    return (
        <div className={
        sender === 'user' 
            ? 'chat-message-user' 
            : 'chat-message-robot'
        }>
        {sender==='robot' && (
            <img src={RobotProfileImage} alt="robot profile image" className="chat-message-profile" />
        )}
        <div className="chat-message-text">
            {message}
        </div>
        {sender==='user' && (
            <img src={UserProfileImage} alt="user profile image" className="chat-message-profile" />
        )}
        </div>
    );
}

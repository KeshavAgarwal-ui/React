import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';

function useAutoScroll(dependenices){
    const chatMessagesRef = useRef(null);
    useEffect(()=>{
    const containerElement =chatMessagesRef.current;
    if(containerElement){
        containerElement.scrollTop = containerElement.scrollHeight;
    }
    }, [dependenices]);
    return chatMessagesRef;
}

function ChatMessages({ chatMessages }){        
    const chatMessagesRef = useAutoScroll(chatMessages);

    if(chatMessages.length==0){
        return(
        <div className="chat-messages-container empty-chat-messages-container" ref={chatMessagesRef}>
        <p className="welcome-message">Welcome to my ChatBot Project! Send a message using textbox below.</p>
        </div>
        );
    }
    else{
        return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chatMessage)=>{
            return (
            <ChatMessage 
                message={chatMessage.message}
                sender={chatMessage.sender}
                key={chatMessage.id}
            />
            );
        })}
        </div>
    );
    }       
}

export default ChatMessages;
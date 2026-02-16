import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinnerGif from '../assets/loading-spinner.gif'

export function ChatInput({ chatMessages, setChatMessage }){
    const [inputText,setInputText] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    function saveInputText(event){
        setInputText(event.target.value);
    }

    function enterKeyCheck(event){
        if(event.key=='Enter'){
        sendMessage();
        }
        if(event.key=='Escape'){
        setInputText('');
        }
    }

    async function sendMessage(){
        if(inputText!=='' && isLoading==false){
        const newChatMessages = [
            ...chatMessages,
            {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID()
            }
        ];

        setChatMessage(newChatMessages);
        setInputText('');

        setChatMessage([
            ...newChatMessages,
            {
            message: <img src={LoadingSpinnerGif} alt="loading-spinner" className="loading-spinner" />,
            sender: "robot",
            id:crypto.randomUUID()
            }
        ]);
        setIsLoading(true);
        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessage([
            ...newChatMessages,
            {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
            }
        ]);
        setIsLoading(false);
        }

    }
    return (
        <div className="chat-input-container">
        <input 
            type="text" 
            placeholder="Send a message to Chatbot" 
            size="30" 
            onChange={saveInputText}
            onKeyDown={enterKeyCheck}
            value={inputText}
            className="chat-input"
        />
        <button
            onClick={sendMessage}
            className="send-button"
        >Send</button>
        </div>
    );
    }
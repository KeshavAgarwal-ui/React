import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import './App.css'


function App() {
  const [chatMessages, setChatMessage] = useState([]);
  // const [chatMessages, setChatMessage] = array;
  // const chatMessages = array[0];
  // const setChatMessage = array[1];
  return (
        <div className="app-container">
          <ChatMessages 
          chatMessages={chatMessages}
          />
          <ChatInput 
            chatMessages={chatMessages}
            setChatMessage={setChatMessage}
          />
      </div>
  );
}

export default App

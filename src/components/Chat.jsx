import React, { useState, useContext } from 'react';
import '../styles/Chat.css';
import { getAnswer } from '../helpers/IAHelper.js';
import { UserContext } from '../context/UserContext.jsx';



const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const { user } = useContext(UserContext);
  const handleSendMessage = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      const userMessage = {
        id: messages.length + 1,
        text: inputValue,
        user: user?.name ?? "User",
        timestamp: new Date().toLocaleTimeString(),
      };


      setMessages((prevMessages) => [...prevMessages, userMessage]);

      setInputValue('');

      setTimeout(async() => {
        const chatResponse = {
          id: messages.length + 2,
          text: await getAnswer(inputValue),
          user: 'Motor',
          timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prevMessages) => [...prevMessages, chatResponse]);
      }, 1000); 
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {messages.length === 0 ? (
          <div className="no-messages">No hay mensajes aún...</div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`chat-message ${message.user === 'Motor' ? 'chatbot-message' : ''}`}>
              <div className="message-info">
                <span className="message-user">{message.user}:</span>
                <span className="message-timestamp">{message.timestamp}</span>
              </div>
              <div className="message-text">{message.text}</div>
            </div>
          ))
        )}
      </div>

      <form className="chat-input-container" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="chat-input"
          placeholder="Escribe tu mensaje..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="search-button">
            <img src="src/img/icon_search.png" alt="Buscar" className="button-icon" />
            <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Chat;

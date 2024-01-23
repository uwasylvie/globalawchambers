import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import "./message.css"
import axios from "axios";


const Messages = () => {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        const res = await axios.get("/messages");
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMessages();
  }, []);

  console.log(messages);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/messages/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <div>
      <h2>My Messages</h2> 
    <div className="messages">
    
      {messages.map((message) => (
        <div key={message.id} className="message">
          
          <h3>{message.title}</h3>
          <p>{message.description}</p>
         
          <button className="delete" onClick={() => handleDelete(message.id)}>Delete</button>
        </div>
      ))}
    </div>
    
    </div>
  )
}

export default Messages
import React, { useState } from "react";
import "../index.css";

const Chatbot = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="chatbot-button" onClick={() => setOpen(!open)}>
                <i className="fas fa-comments"></i>
            </div>
            {open && (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        Chat with Us
                        <span className="close-chat" onClick={() => setOpen(false)}>×</span>
                    </div>
                    <div className="chat-messages">
                        <p className="bot-message">Hello! How can I assist you?</p>
                    </div>
                    <div className="chat-input">
                        <input type="text" placeholder="Type a message..." />
                        <button>Send</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;

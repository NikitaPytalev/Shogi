import React, { useState } from 'react';

const Chat = (props) => {
    const [messages, setMessages] = useState([]);

    return (
        <div>
            <div className="notification">Hello</div>
            <div className="notification">Hi!</div>
            <div className="notification">What's up?</div>
        </div>
    );
};

export default Chat;
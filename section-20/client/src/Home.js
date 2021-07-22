import './Home.css';
import { useState, useEffect } from 'react';
import { socket } from './socket';

function Home(props) {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on('chat-incoming', (value) => {

      let temp = messageList;
      temp.push(value);

      setMessageList([...temp]);
    });

    return function cleanup() {
      socket.off('chat-incoming');
    }
    
  }, []);

  function submitMessage () {
    socket.emit('chat', {
      message: message,
      sender: props.user.email
    });
    setMessage('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="chat-container">
          <div className="messages-container">
            {
              messageList.map(message => {
                return <div className={`message ${message.sender === props.user.email ? 'message-right' : 'message-left'}`} key={message.message}>
                  <div className="message-content">
                    <div className="text">{message.message}</div>
                    <div className="email">{message.sender}</div>
                  </div>
                </div>
              })
            }
          </div>
          <div className="input-container">
            <input value={message} onChange={(e) => setMessage(e.target.value)}
              placeholder="Type something..."></input>
            <button onClick={submitMessage}>Send</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;

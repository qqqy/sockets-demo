import React from 'react';
import {subscribeToTimer, receiveMessage, sendMessage} from "./api";

function App() {
  
  const [timestamp, setTimestamp] = React.useState("No timestamp yet")
  const [messagesArray , setMessagesArray] = React.useState([])
  const [currentMessage , setCurrentMessage] = React.useState({
    user: "Unknown",
    text: "No Message"
  })
  
  React.useEffect(()=>{
    console.log("UseEffect Loaded")
    subscribeToTimer(
      function timestampCallback(err, timestamp) {
        setTimestamp(timestamp)
      }
    )
    receiveMessage(
      function messageCallback(payload) {
        console.log("messageCallback")
        setMessagesArray(payload)
      }
    )
  } 
  , [messagesArray]
  );



  return (
    <>
      {timestamp}
      <br/>
      <br/>

      {/* The Message Form */}
      <input onChange={e => setCurrentMessage({...currentMessage, user: e.target.value})} placeholder="name"/>
      <input onChange={e => setCurrentMessage({...currentMessage, text: e.target.value})} placeholder="message"/>
      <button onClick={() => sendMessage(currentMessage)}>SEND</button>
      <br/><br/>

      {/* The Messages Display */}
      {messagesArray.reverse().map((message, i) => (
        <div key={i} className="message">
          <h3>{message.user.toUpperCase()}</h3>
          <p>{message.text}</p>
        </div>
      ))}
    </>
  );
}

export default App;

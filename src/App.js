import React from 'react';
import {subscribeToTimer, sendMessage} from "./api";

function App() {
  
  const [timestamp, setTimestamp] = React.useState("No timestamp yet")
  const [messagesArray , setMessagesArray] = React.useState([])
  const [currentMessage , setCurrentMessage] = React.useState({
    user: "Unknown",
    text: "No Message"
  })
  
  // console.log("State", currentMessage)
  React.useEffect(()=>{
    subscribeToTimer((err, timestamp) => {
      setTimestamp(timestamp)
    })
    sendMessage(payload => {
      console.log("this is what is actually is", payload)
      setMessagesArray(payload)
    })
  } , []);

  // console.log("TIMESTAMP" , timestamp)

  return (
    <>
    {timestamp}
    <br/>
    <input onChange={e => setCurrentMessage({...currentMessage, user: e.target.value})} placeholder="name"/>
    <input onChange={e => setCurrentMessage({...currentMessage, text: e.target.value})} placeholder="message"/>
    {messagesArray.map((message, i) => (
      <div key={i} className="message">
        <h3>{message.user.toUpperCase()}</h3>
        <p>{message.text}</p>
      </div>
    ))}
    </>
  );
}

export default App;

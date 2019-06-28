import React from 'react';
import {subscribeToTimer, receiveMessage, sendMessage} from "./api";

class App extends React.Component{

  state = {
    timestamp: "No timestamp yet",
    messagesArray: [],
    currentMessage: {
      user: "Unknown",
      text: "No Message"
    }
  };
  
  // const [timestamp, setTimestamp] = React.useState("No timestamp yet")
  // const [messagesArray , setMessagesArray] = React.useState([])
  // const [currentMessage , setCurrentMessage] = React.useState({
  //   user: "Unknown",
  //   text: "No Message"
  // })
  
  componentDidMount(){
    console.log("UseEffect Loaded")
    subscribeToTimer(
      (err, timestamp) => {
        this.setState({timestamp})
      }
    )
    receiveMessage(
      (payload) => {
        console.log("messageCallback")
        this.setState({messagesArray: payload})
      }
    )
  }



  render (){
    const {timestamp , currentMessage , messagesArray} = this.state
    return (
    <>
      {timestamp}
      <br/>
      <br/>

      {/* The Message Form */}
      <input onChange={e => this.setState({currentMessage: {...currentMessage, user: e.target.value}})} placeholder="name"/>
      <input onChange={e => this.setState({currentMessage: {...currentMessage, text: e.target.value}})} placeholder="message"/>
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
  );}
}

export default App;

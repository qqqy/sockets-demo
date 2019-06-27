import openSocket from 'socket.io-client';
const socket = openSocket("http://192.168.1.8:8000");

socket.on("emittedMessage" , () => console.log("We got it!"))

function subscribeToTimer(cb){
  socket.emit("subscribeToTimer" , 1000);
  socket.on("timer" , timestamp => cb(null , timestamp));
}

function receiveMessage(cb){
  console.log("receiveMessage")
  socket.on("emittedMessage" , receivedMessages => {
    console.log("emittedMessage handler invoked" , receivedMessages)
    cb(receivedMessages)
  })
}

function sendMessage(message){
  socket.emit("sendMessage" , message)
}

export {
  subscribeToTimer , 
  receiveMessage , 
  sendMessage
};
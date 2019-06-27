import openSocket from 'socket.io-client';
const socket = openSocket("http://localhost:8000");

function subscribeToTimer(cb){
  console.log("STT invoked")
  socket.on("timer" , timestamp => cb(null , timestamp));
  socket.emit("subscribeToTimer" , 1000);
}

export {subscribeToTimer};
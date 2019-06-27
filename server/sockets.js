const express = require("express");
const app = express();
const server = require("http").createServer(app);


const io = require("socket.io")(server);
const messages = []

io.on("connection" , (client) => {
  client.on("subscribeToTimer" , (interval) => {
    setInterval(() => {
      client.emit("timer" , new Date())
    }, interval);
  })
  client.on("sendMessage" , (message) => {
    console.log("message received," ,message)
    messages.push(message)
    client.emit("emittedMessage" , messages)
  })
})


const port = 8000;

io.listen(port);

console.log("Sockets listening on" , port , ": Step One complete");
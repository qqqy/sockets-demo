const io = require("socket.io")();
const messages = [
  {
    user: "Test User",
    text: "Sample Text"  
  }
]

io.on("connection" , (client) => {
  // console.log("Client Connected!" , client)
  client.on("subscribeToTimer" , (interval) => {
    // console.log("Client is subscribing to interval" , interval);
    setInterval(() => {
      client.emit("timer" , new Date())
    }, interval);
  })
  client.on("sendMessage" , (payload) => {
    console.log("message received," ,payload)
    messages.push(payload)
    client.emit("emittedMessage" , messages)
  })
})


const port = 8000;

io.listen(port);

console.log("Sockets listening on" , port);
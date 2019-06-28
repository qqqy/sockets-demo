const io = require("socket.io")();
const messages = []

io.on("connection" , (client) => {
  console.log('new guy')
  client.on("subscribeToTimer" , (interval) => {
    setInterval(() => {
      client.emit("timer" , new Date())
    }, interval);
  })
  client.on("sendMessage" , (message) => {
    console.log("message received," ,message)
    messages.push(message)
    io.emit("emittedMessage" , messages)
  })
})


const port = 8000;

io.listen(port);

console.log("Sockets listening on" , port , ": Step One complete");
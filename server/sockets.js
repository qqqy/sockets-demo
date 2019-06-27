const io = require("socket.io")();

io.on("connection" , (client) => {
  console.log("Client Connected!")
  client.on("subscribeToTimer" , (interval) => {
    // console.log("Client is subscribing to interval" , interval);
    setInterval(() => {
      client.emit("timer" , new Date())
    }, interval);
  })
})


const port = 8000;

io.listen(port);

console.log("Sockets listening on" , port);
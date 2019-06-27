const io = require("socket.io")();
const port = 8000;

io.listen(port);

console.log("Sockets listening on" , port);

io.on("connection" , (client) => {

})
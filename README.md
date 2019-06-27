# SOCKETS DEMO

npm i socket.io

Require in, declare port.

Set listening.

.on("connection" , (client) => {

})

## CORE CONCEPTS 
socket.io is a sort of two-way server

loop architecture

io.on(keystring , cb)
the cb should have a parameter that represents the client connection (client)

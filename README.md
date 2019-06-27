# SOCKETS DEMO

## WALKTHROUGH
__It's recommended that you open sockets.js, api.js, and App.js for this exercise.__

### LOADUP
(sockets.js) The server requires and invokes sockets.io, creating the io object. 
(sockets.js) invokes io.listen, passing in a port. It is now listening.
(App.js) imports functions from api.js, causing the file to run
(api.js) api.js creates the socket by invoking openSocket. It emits to the "connection" endpoint and passes the socket object to the server. This creates the connection.


### THE UPDATING TIMESTAMP
(App.js) useEffect is invoked. It invokes subscribeToTimer, passing in the "timestampCallback" function.
(api.js) subscribeToTimer emits to the "subscribeToTimer" endpoint, passing a payload of "1000" to sockets.js.
(sockets.js) The "subscribeToTimer" endpoint invokes its handler, starting an interval based on the "1000" payload. 
(sockets.js) Each interval, it emits to the "timer" client endpoint, sending a new timestamp payload.
(api.js) The "timer" endpoint calls its handler.
(api.js) The handler function calls the "timestampCallback" function from line 2, passing in the timestamp.
(App.js) timestampCallback fires every second and sets the timestamp to state.
(App.js) re-renders to display the new timestamp

### MESSAGES
(App.js) useEffect is invoked. It calls receiveMessage and passes-in the messageCallback function.
(App.js) When the "send" button is clicked, sendMessage is called, passing-in the currentMessage object from state.
(api.js) sendMessage emits to the "sendMessage" endpoint, passing currentMessage to the server.
(sockets.js) "sendMessage" endpoint calls its handler and passes it currentMessage as "message".
(sockets.js) The handler pushes message to messages, then emits to the "emittedMessage" endpoint, passing the messages array to the client.
(api.js) the "emittedMessages" endpoint calls its handler, passing in the messages array as receivedMessages.
(api.js) the hander calls its callback from line 1 (messageCallback), passing-in receivedMessages
(App.js) messageCallback sets receivedMessages to state.

## CORE CONCEPTS 
socket.io is a sort of two-way server

loop architecture

io.on(keystring , cb)
the cb should have a parameter that represents the client connection (client)


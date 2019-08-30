const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require("socket.io")(http);
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on('connection', function(socket) {
    socket.on('chat_message', function(message) {
        io.emit('chat_message', message);
    });
});

const server = http.listen(8080, function(){
    console.log("Listening on port 8080...");
});

    

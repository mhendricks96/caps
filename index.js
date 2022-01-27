'use strict';

/////Basic socket io setup////
const socketio = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = socketio(PORT);

server.on('connection', (socket) => {
  console.log('new connection made');
});

const socketioClient = require('socket.io-client');

const client = socketioClient.connect('http://localhost:3000');
/////////////////
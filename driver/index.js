'use strict';
const socketioClient = require('socket.io-client');
const client = socketioClient.connect('http://localhost:3000/caps');

client.on('connct', () => {
  console.log(client.id);

  client.on('pickup', (payload) => {
    console.log('picking up');

    setTimeout(() => {
      console.log('Driver in transit');
      client.emit('delivered', payload);
    }, 3000);
  });
});

client.on('Sending', payload => {
  console.log(payload);
});

// function handlePickup(payload) {
//   console.log('Order picked up');
//   client.emit('delivered', payload);


// }
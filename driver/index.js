'use strict';
const socketioClient = require('socket.io-client');
const client = socketioClient.connect('http://localhost:3000/caps');

// const eventPool = require('../eventPool');

// eventPool.on('pickup', (order) => {
//   console.log('Driver picked up - ORDER_ID:', order.orderID, '\n');
//   eventPool.emit('in-transit', order);
// });

// function driverEvent(order){
//   console.log('Driver delivered');
//   console.log('ORDER_ID:', order.orderID, '\n');
//   //eventEmitter.emit('delivered', order);
// }

// module.exports = driverEvent;
client.on('connct', (socket) => {
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
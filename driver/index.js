'use strict';
const socketioClient = require('socket.io-client');

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
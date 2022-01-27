'use strict';
const socketioClient = require('socket.io-client');

const HOST = process.env.HOST || 'http://localhost:3000';
const NAMESPACE = process.env.NAMESPACE || '/caps'

const socket = socketioClient.connect(`${HOST}:${NAMESPACE}`);

//this should ideally be a random, unique number
const orderNumber = 33535364;

//this should also be random information
let payload = {
  store: 'michaels',
  orderID: orderNumber,
  customer: 'random person',
  address: 'eazy street',
};

socket.on('connect', (socket) => {
  console.log('vendor connected');
})

setInterval(() => {
  socket.emit('pickup', payload);
  consol.log('Vendor is ready to ship', payload.orderID);
  orderNumber++;
}, 6000)

socket.on('shipment was picked up', (payload) => {
  console.log('socket id: ', socket.id);
  pickupRequest();
});

socket.on('delivered', (payload) => {
  console.log('order delivered:', payload.orderId);
}); 

// const eventPool = require('../eventPool.js');

// eventPool.on('delivered', (order) => {
//   console.log('VENDOR: Thank you,', order.customer, 'from,', order.store, '\n');
// });

// function vendorEvent(order){
//   console.log('VENDOR: start pickup');
//   console.log('ORDER_ID:', order.orderID, '\n');
//   eventPool.emit('pickup', order);
// }

// module.exports = vendorEvent;
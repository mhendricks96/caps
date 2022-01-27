const io = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = io(PORT);

const caps = server.of('/caps');
const logger = require('../logger');

const queue = {
  orders: {},
  pickup: {},
  delivery: {},
  backorders: {},
  addOrders: function (order, id) {
    this.orders[id] = order;
    return order;
  },
  removeOrders: function (id) {
    delete this.orders[id];
  },
  addBackorders: function (message, id){
    this.backorders[id] = message;
  },
};

caps.on('connection', (socket) => {
  console.log(`socket connected: ${socket.id}`);

  socket.join('vendors');

  caps.to('vendors').emit('ready for orders');

  socket.on('pickup', (payload) => {
    queue.addOrders(payload);
    logger('Pickup Requested', payload);
    caps.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    logger('In-Transit', payload);
  });

  socket.on('delivered', payload => {
    console.log(queue);
    queue.removeOrders();
    caps.emit('delivered', payload);
    logger('Delivered', payload);
  });
});

module.exports = queue;
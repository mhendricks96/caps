const io = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = io(PORT);

const caps = server.of('/caps');
const logger = require('../logger');

// const queue = {
//   packet: {},
// };

caps.on('connection', (socket) => {
  console.log(`socket connected: ${socket.id}`);

  socket.join('vendors');

  caps.to('vendors').emit('ready for orders');

  socket.on('pickup', payload => {
    logger('Pickup Requested', payload);
    caps.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    logger('In-Transit', payload);
  });

  socket.on('delivered', payload => {
    logger('Delivered', payload);
    caps.emit('delivered', payload);
  });
});
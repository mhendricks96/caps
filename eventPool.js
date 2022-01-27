'use strict';

// main hub of events happening
const Events = require('events');

const eventPool = new Events();

module.exports = eventPool;
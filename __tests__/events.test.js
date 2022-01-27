
   
'use strict';

const eventEmitter = require('../eventPool.js');
const delivery = require('../driver.js');
const vendor = require('../vendor.js');
const hub = require('../caps.js');

describe('Testing my event', () => {

  jest.spyOn(console, 'log');

  console.log = jest.fn();

  it('Should log a message with orderId', async () => {

    const payload = {
      orderId: 123,
    };
    delivery(payload);

    expect(console.log).toHaveBeenCalled();
    // expect(eventEmitter).toEqual(200);
    // expect(eventEmitter).toEqual(eventEmitter);
  });
});
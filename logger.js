'use strict';

function logger(eventName, payload) {
  class Event {
    constructor(eventName, time, payload) {
      this.event = eventName;
      this.time = time;
      this.payload = payload;
    }
  }

  const newEventToLog = new Event(eventName, new Date(), payload);

  console.log(newEventToLog);
}

module.exports = logger;
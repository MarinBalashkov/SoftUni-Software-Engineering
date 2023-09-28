const events = require('events');
let eventEmitter = new events.EventEmitter();

function raiseEvents() {
    console.log('before');
    eventEmitter.emit('ping', 'Hello world!');
    console.log('after');
    eventEmitter.emit('ping', 'Hello world!');
    eventEmitter.emit('pong', 3, 2);
}

module.exports = {
    eventEmitter, 
    raiseEvents
};
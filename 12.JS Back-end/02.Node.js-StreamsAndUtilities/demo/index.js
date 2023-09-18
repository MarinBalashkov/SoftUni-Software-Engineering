const events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on('ping', firstHandler);
eventEmitter.on('ping', secondHandler);
eventEmitter.on('pong', thirdHandler);



function firstHandler(msg) {
    console.log('first', msg);
}

function secondHandler(msg) {
    console.log('second', msg.length);
}

function thirdHandler(a, b) {
    console.log(a + b);
}

console.log('before');
eventEmitter.emit('ping', 'Hello world!');
console.log('after');
eventEmitter.emit('ping', 'Hello world!');
eventEmitter.emit('pong', 3, 2);


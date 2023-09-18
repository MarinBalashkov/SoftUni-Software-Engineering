const { eventEmitter } = require('./index2.js')

function firstHandler(msg) {
    console.log('first', msg);
}

function secondHandler(msg) {
    console.log('second', msg.length);
}

function thirdHandler(a, b) {
    console.log(a + b);
}


eventEmitter.on('ping', firstHandler);
eventEmitter.on('ping', secondHandler);
eventEmitter.on('pong', thirdHandler);
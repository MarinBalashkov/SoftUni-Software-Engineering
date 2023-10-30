const mongoose = require('mongoose');

module.exports = (app) => {
    return new Promise((reject, resolve) => {
        mongoose.connect('mongodb://127.0.0.1:27017/cubicle');

        const db = mongoose.connection;
        db.on('error', err => {
            console.error('Database error', err.message);
            reject(err.message);
        });
        db.on('open', () => {
            console.log('Database connected!');
            resolve();
        });
    });
};
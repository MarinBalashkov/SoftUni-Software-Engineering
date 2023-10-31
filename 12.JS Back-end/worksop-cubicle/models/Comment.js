const { Schema, model } = require('mongoose');

const schema = new Schema({
    author: { type: String, require: true },
    content: { type: String, require: true, maxLength: 300},
});

module.exports = model('Comment', schema);
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type: String, require: true}, 
    age: {type: Number, require: true}
});

module.exports = mongoose.model('Person', schema);
const {mongoose, Schema} = require('mongoose');

const schema = mongoose.Schema({
    author: {type: Schema.Types.ObjectId, ref: 'Person'}, 
    title: {type: String, require: true}, 
    content: {type: String, require: true, minLength: 10}, 
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}], 
});

module.exports = mongoose.model('Post', schema);
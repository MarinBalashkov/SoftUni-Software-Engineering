const {mongoose, Schema} = require('mongoose');

const schema = mongoose.Schema({
    author: {type: Schema.Types.ObjectId, ref: 'Person'}, 
    content: {type: String, require: true}, 
    post: {type: Schema.Types.ObjectId, ref: 'Post'}
});

module.exports = mongoose.model('Comment', schema);
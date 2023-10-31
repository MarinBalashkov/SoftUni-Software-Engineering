const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, require: true, maxLength: 20 },
    description: { type: String, require: true, maxLength: 500},
    imageUrl: { type: String, require: true, match: /^https?:\/\// },
    difficulty: { type: Number, min: 0, max: 6 },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}], 
});

module.exports = model('Cube', schema);
const mongoose = require('mongoose');

// Create Schema
const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: async function (value) { 
                const firstLater = value.slice(0, 1);
                return firstLater === firstLater.toLocaleUpperCase();
            },
            message: 'invalid name'
        }
    },
    color: {
        type: String,
        enum: {
            values: ['Grey', 'Orange', 'White', 'Black'],
            message: 'color mus be one of: Grey, Orange, White, Black ',
        }
    },
    age: { type: Number },
});

//  attach method to model
catSchema.methods.getInfo = function () {
    return console.log(`I am ${this.name} and i am ${this.age} years old cat!`);
};


// add validation to model Schema
catSchema.path('name').validate(function () {
    return this.name.length >= 2 && this.name.length <= 10;
}, 'Name must be between 2 and 10 symbols long!');

// persist schema to database!
module.exports = mongoose.model('Cat', catSchema);
const mongoose = require('mongoose');

    // Create Schema
    const studentSchema = new mongoose.Schema({
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        facultyNumber: { type: String, unique: true },
        age: { 
            type: Number, 
            min: [0,  'age can not be a negative number!'],
        }, 
        isDeleted: {type: Boolean}
    });
    
    //  attach method to model
    studentSchema.methods.getInfo = function () {
        return console.log(`I am ${this.firstName} ${this.lastName}!`);
    };

    // add virtual property to model!
    studentSchema.virtual('fullName').get(function () {
        return `${this.firstName} ${this.lastName}`;
    });

    // add validation to model Schema
    studentSchema.path('firstName').validate(function () {
        return this.firstName.length >= 2 && this.firstName.length <= 10;
    }, 'First name must be between 2 and 10 symbols long!');

    // persist schema to database!
    module.exports = mongoose.model('Student', studentSchema);
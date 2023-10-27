const mongoose = require('mongoose');
const Student = require('./models/Student');
const Cat = require('./models/Cat');

start().catch(err => { console.log(err.message) });

async function start() {
    const client = await mongoose.connect('mongodb://127.0.0.1:27017/testdb');

    console.log('Connected at', 'mongodb://127.0.0.1:27017/');

    // create student
    // const myStudent = new Student({
    //     firstName: 'Marin',
    //     lastName: 'Balashkov', 
    //     facultyNumber: '8316000', 
    //     age: 35
    // });
    // persist data to Database
    // await myStudent.save();

    // const myStudent = new Student({
    //     firstName: 'Cviatko',
    //     lastName: 'Todorov', 
    //     facultyNumber: '8316001', 
    //     age: 36
    // });
    // await myStudent.save();

    // create cat
    // const myCat = new Cat({
    //     name: 'Garfield',
    //     age: 3,
    //     color: 'black'
    // });
    // await myCat.save();

    const myCat = new Cat({
        name: 'Momo',
        age: 3,
        color: 'blackkk'
    });

    await myCat.save();

    const studentMarin = await Student.findOne({ firstName: 'Marin' });
    const currentStudents = await Student.find({ _id: '655bce9c11845e7b769483c1' });
    const students = await Student.find({
        $or:
            [
                { firstName: 'Marin' },
                { age: { $lte: 30 } }
            ]
    });


    const pageSize = 10;
    const page = 3;
    const oldStudentsPagination = await Student
        .find()
        .where('age').gt(30).lt(45)
        .where('firstName').equals('Marin')
        .sort({age: -1})
        .skip(pageSize * (page - 1)).limit(10);

    studentMarin.getInfo();
    console.log(studentMarin.fullName);

    // update entity
    studentMarin.age = 25;
    await studentMarin.save();
    //await Student.updateMany({age: '$gt: 20'}, {age: age++});
    await Student.findByIdAndUpdate('655bc2bd7a9fc4a6123d722e', { $set: { lastName: 'Ivanov' } });
    await Student.updateOne({ firstName: 'Marin' }, { isDeleted: true });

    // delete entity!
    // Cat.findByIdAndDelete('655bce9c11845e7b769483c1');
    // Cat.deleteOne('655bce9c11845e7b769483c1');

    console.log(await Student.find({}));
    console.log(await Cat.find({}));
    console.log(await Student.countDocuments({ firstName: 'Marin' }));
}
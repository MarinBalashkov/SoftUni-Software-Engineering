const mongodb = require('mongodb');
const { MongoClient } = mongodb;
const connectionString = 'mongodb://localhost:27017';

const client = new MongoClient(connectionString);

client.connect(function (err) {
    if (err != null) {
        console.log('Something unexpected happened!');
    }

    console.log('Database connected!')

    const db = client.db('testdb');
    const people = db.collection('people');
    people.insertOne({ name: 'Gugo', age: 23 }, (err, result) => {
        people.find({}).toArray((err, data) => {
            console.log(data);
        })
    });
});
const {MongoClient} = require('mongodb');

const connectionString = 'mongodb://localhost:27017';
const client = new MongoClient(connectionString, {
    monitorCommands: true
});

client.connect(async (err) => {
    if (err != null) {
        console.log('Error!');
    }

    console.log('Connected!');
});
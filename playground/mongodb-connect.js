//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = { name: 'andrew', age: 25 };
// var {name} = user;

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable do connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    // const db = client.db('TodoApp');
    
    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completd: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    const db = client.db('TodoApp');
    
    db.collection('Users').insertOne({
        name: 'Andre',
        age: 25,
        location: 'Philadelphia'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});


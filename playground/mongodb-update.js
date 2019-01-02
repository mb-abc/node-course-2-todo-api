const {MongoClient, ObjectID} = require('mongodb');

// var user = { name: 'andrew', age: 25 };
// var {name} = user;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable do connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    

    db.collection('Users').findOneAndUpdate({ 
        _id: new ObjectID("5c2cd2f33274b8c15e841034") 
    }, {
        $set: {
            location: 'Miami'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
            console.log(result);
        }, (err) => {
            console.log('Unable to fetch todos', err);
    });

    client.close();
});

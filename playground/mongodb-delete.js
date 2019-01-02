const {MongoClient, ObjectID} = require('mongodb');

// var user = { name: 'andrew', age: 25 };
// var {name} = user;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable do connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    

    // db.collection('Todos').deleteMany({ test: 'Eat lunch' })
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err)
    // });

    // db.collection('Todos').deleteOne({ test: 'Eath lanch' })
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err)
    // });

    db.collection('Todos').findOneAndDelete({ completed: false })
        .then((result) => {
            console.log(result);
        }, (err) => {
            console.log('Unable to fetch todos', err)
    });

    client.close();
});

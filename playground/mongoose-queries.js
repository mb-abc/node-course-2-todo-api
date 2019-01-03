const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c2de31480d48f1061d56de6';

//  if (!ObjectID.isValid(id)) {
//     return console.log('Id not valid'); 
//  }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// var query = Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found!');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// var query = Todo.findById(id);

// query.select('text completed');

// query.exec((err, todo) => {
//     if (err) {
//         return console.log(err);
//     };

//     console.log('Todo -- ');
//     console.log(todo);
// });
var userId = '5c2e0a763274b8c15e841c20';

if (!ObjectID.isValid(userId)) {
    return console.log(`User Id ${userId} is not valid!`);
}

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Unable to find user');    
    }
    console.log('User:', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });


Todo.remove({
    _id: new ObjectID('5c2f0d2b3274b8c15e8425cf')
  }).then((todo) => {
    console.log(todo);
});

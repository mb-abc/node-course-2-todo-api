const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');

const {ObjectID} = require('mongodb');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// crea un nuovo TODO
app.post('/todos', (req, res) => {
    var todo = new Todo( {
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  // validate id using isValid
  if (!ObjectID.isValid(id)) {
      return res.status(404).send();
  }

  Todo.remove({
      _id: new ObjectID(id)
    }).then((result) => {
      console.log(result);
      if (!result) {
          return res.status(404).send();
      } else if (result.n === 0 || result.ok !== 1) {
        return res.status(404).send();
      }

      res.status(200).send(result);
    }).catch((e) => {
      res.status(400).send();
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // validate id using isValid
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id)
        .then((todo) => {
            //console.log('then', todo);
            if (!todo) {
                return res.status(404).send();
            }

            res.status(200).send({todo});
        }).catch((e) => {
            res.status(400).send();
        });
});


app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
      return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(400).send();
    }

    return res.send({todo});
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};

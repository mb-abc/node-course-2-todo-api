var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
//schema.set('toObject', { getters: true });

var Todo = mongoose.model('Todo', schema);

module.exports = {Todo};

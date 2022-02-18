const mongoose = require('mongoose');
const Answer = require('./Answer').Schema;

const Schema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    question_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    answers: {
      type: [Answer],
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('StudentAnswer', Schema);
module.exports = { Model, Schema };

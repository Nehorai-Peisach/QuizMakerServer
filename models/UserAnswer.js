const mongoose = require('mongoose');
const Answer = require('./Answer').Schema;
const Question = require('./Question').Schema;

const Schema = new mongoose.Schema(
  {
    Question: {
      type: Question,
      required: true,
    },
    Answers: {
      type: [Answer],
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('UserAnswer', Schema);
module.exports = { Model, Schema };

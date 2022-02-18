const mongoose = require('mongoose');
const Answer = require('./Answer').Schema;

const Schema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    topics_id: {
      type: [mongoose.Types.ObjectId],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    lower_text: {
      type: String,
      required: false,
    },
    answers: {
      type: [Answer],
      required: true,
    },
    tags: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Question', Schema);
module.exports = { Model, Schema };

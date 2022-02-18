const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    is_correct: {
      type: Boolean,
      required: true,
    },
    input: {
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);

const Model = mongoose.model('Answer', Schema);
module.exports = { Model, Schema };

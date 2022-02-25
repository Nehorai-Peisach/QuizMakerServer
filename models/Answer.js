const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    id: {
      type: Number,
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
  },
  { timestamps: true }
);

const Model = mongoose.model('Answer', Schema);
module.exports = { Model, Schema };

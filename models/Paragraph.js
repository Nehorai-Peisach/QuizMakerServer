const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Paragraph', Schema);
module.exports = { Model, Schema };

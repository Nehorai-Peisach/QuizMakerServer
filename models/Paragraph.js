const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Paragraph', Schema);
module.exports = { Model, Schema };

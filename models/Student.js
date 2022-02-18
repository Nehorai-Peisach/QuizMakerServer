const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Student', Schema);
module.exports = { Model, Schema };

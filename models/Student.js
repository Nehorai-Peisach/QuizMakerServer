const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    Id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Student', Schema);
module.exports = { Model, Schema };

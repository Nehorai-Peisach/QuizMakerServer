const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    Id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Users', Schema);
module.exports = { Model, Schema };

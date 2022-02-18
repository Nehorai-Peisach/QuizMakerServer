const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Company', Schema);
module.exports = { Model, Schema };

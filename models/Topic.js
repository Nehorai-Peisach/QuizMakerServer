const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    company_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Topic', Schema);
module.exports = { Model, Schema };

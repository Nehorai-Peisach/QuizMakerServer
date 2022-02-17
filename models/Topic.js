const mongoose = require('mongoose');
const Company = require('./Company').Schema;

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
    Company: {
      type: Company,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Topic', Schema);
module.exports = { Model, Schema };

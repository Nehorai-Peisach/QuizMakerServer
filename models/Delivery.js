const mongoose = require('mongoose');
const Paragragh = require('./Paragraph').Schema;

const Schema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    from: {
      type: String,
      required: true,
    },
    cc: {
      type: String,
      required: false,
    },
    bcc: {
      type: String,
      required: false,
    },
    pass_paragragh: {
      type: Paragragh,
      required: true,
    },
    fail_paragragh: {
      type: Paragragh,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Delivery', Schema);
module.exports = { Model, Schema };

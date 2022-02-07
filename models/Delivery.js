const mongoose = require('mongoose')
const Paragragh = require('./Paragraph').Schema

const Schema = new mongoose.Schema(
  {
    From: {
      type: String,
      required: true,
    },
    CC: {
      type: String,
      required: true,
    },
    BCC: {
      type: String,
      required: true,
    },
    PassParagragh: {
      type: Paragragh,
      required: true,
    },
    FailParagragh: {
      type: Paragragh,
      required: true,
    },
  },
  { timestamps: true }
)

const Delivery = mongoose.model('Delivery', Schema)
module.exports = { Delivery, Schema }

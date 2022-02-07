const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Texts: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
)

const Paragraph = mongoose.model('Paragraph', Schema)
module.exports = { Paragraph, Schema }

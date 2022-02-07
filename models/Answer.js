const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
  {
    Text: {
      type: String,
      required: true,
    },
    IsCorrect: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

const Answer = mongoose.model('Answer', Schema)
module.exports = { Answer, Schema }

const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

const Answer = mongoose.model('Answer', Schema)
module.exports = { Answer, Schema }

const mongoose = require('mongoose')
const Answer = require('./Answer').Schema

const Schema = new mongoose.Schema(
  {
    QuestionId: {
      type: String,
      required: true,
    },
    Answers: {
      type: [Answer],
      required: true,
    },
  },
  { timestamps: true }
)

const UserAnswer = mongoose.model('UserAnswer', Schema)
module.exports = { UserAnswer, Schema }

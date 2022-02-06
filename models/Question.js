const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema(
  {
    Id: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    TopicId: {
      type: [String],
      required: true,
    },
    Text: {
      type: String,
      required: true,
    },
    LowerText: {
      type: String,
      required: false,
    },
    Layout: {
      type: String,
      required: false,
    },
    Tags: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
)

const Question = mongoose.model('Question', questionSchema)
module.exports = Question

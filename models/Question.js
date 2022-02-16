const mongoose = require('mongoose')
const Answer = require('./Answer').Schema

const Schema = new mongoose.Schema(
  {
    Id: {
      type: String,
      required: true,
    },
    CompanyId: {
      type: String,
      required: true,
    },
    TopicId: {
      type: [String],
      required: true,
    },
    Type: {
      type: String,
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
    Answers: {
      type: [Answer],
      required: true,
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

const Model = mongoose.model('Question', Schema)
module.exports = { Model, Schema }
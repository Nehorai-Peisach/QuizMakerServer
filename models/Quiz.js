const mongoose = require('mongoose')
const Paragraph = require('./Paragraph').Schema
const Delivery = require('./Delivery').Schema

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
    Language: {
      type: String,
      required: true,
    },
    ShowAnswersAfter: {
      type: Boolean,
      required: true,
    },
    Introduction: {
      type: Paragraph,
      required: true,
    },
    TopicId: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    PassingGrade: {
      type: Number,
      required: true,
    },
    QuestionsId: {
      type: [String],
      required: true,
    },
    MsgOnSuccess: {
      type: Paragraph,
      required: true,
    },
    MsgOnFailure: {
      type: Paragraph,
      required: true,
    },
    Delivery: {
      type: Delivery,
      required: true,
    },
    ChangedDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
)

const Quiz = mongoose.model('Quiz', Schema)
module.exports = { Quiz, Schema }

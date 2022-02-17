const mongoose = require('mongoose');
const Paragraph = require('./Paragraph').Schema;
const Delivery = require('./Delivery').Schema;

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
    Field: {
      type: String,
      required: false,
    },
    TestType: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Header: {
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
      type: String,
      required: true,
    },
    MsgOnFailure: {
      type: String,
      required: true,
    },
    Delivery: {
      type: Delivery,
      required: false,
    },
    ChangedDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Quizzes', Schema);
module.exports = { Model, Schema };

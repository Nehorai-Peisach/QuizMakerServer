const mongoose = require('mongoose');
const Paragraph = require('./Paragraph').Schema;
const Question = require('./Question').Schema;
const Topic = require('./Topic').Schema;
// const Delivery = require('./Delivery').Schema;

const Schema = new mongoose.Schema(
  {
    // Id: {
    //   type: mongoose.Types.ObjectId,
    //   required: true,
    // },
    Topic: {
      type: Topic,
      required: false,
    },
    Language: {
      type: String,
      required: true,
    },
    Type: {
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
    ShowAnswersAfter: {
      type: Boolean,
      required: true,
    },
    Header: {
      type: String,
      required: true,
    },
    Questions: {
      type: [Question],
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
    ChangedDate: {
      type: Date,
      required: true,
    },
    // Delivery: {
    //   type: Delivery,
    //   required: false,
    // },
  },
  { timestamps: true }
);

const Model = mongoose.model('Quizzes', Schema);
module.exports = { Model, Schema };

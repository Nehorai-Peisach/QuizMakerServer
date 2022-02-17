const mongoose = require('mongoose');
const UserAnswer = require('./UserAnswer').Schema;
const Question = require('./Question').Schema;
const Student = require('./Student').Schema;


const Schema = new mongoose.Schema(
  {
    Id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    Topic: {
      type: Topic,
      required: false,
    },
    Name: {
      type: String,
      required: true,
    },
    PassingGrade: {
      type: Number,
      required: true,
    },
    Questions: {
      type: [Question],
      required: true,
    },
    Student: {
      type: Student,
      required: true,
    },
    StudentAnswers: {
      type: [UserAnswer],
      required: true,
    },
    Score: {
      type: Number,
      required: true,
    },
    DoneDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('CompletedQuiz', Schema);
module.exports = { Model, Schema };

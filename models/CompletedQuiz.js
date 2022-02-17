const mongoose = require('mongoose');
const UserAnswer = require('./UserAnswer').Schema;

const Schema = new mongoose.Schema(
  {
    Id: {
      type: mongoose.Types.ObjectId,
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
    UserId: {
      type: String,
      required: true,
    },
    UserAnswers: {
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

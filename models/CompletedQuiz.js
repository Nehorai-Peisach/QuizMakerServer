const mongoose = require('mongoose');
const StudentAnswer = require('./StudentAnswer').Schema;


const Schema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    quiz_id:{
      type: mongoose.Types.ObjectId,
      required: true,
    },
    student_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    student_answers: {
      type: [StudentAnswer],
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('CompletedQuiz', Schema);
module.exports = { Model, Schema };

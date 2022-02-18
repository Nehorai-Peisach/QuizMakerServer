const mongoose = require('mongoose');
const Paragraph = require('./Paragraph').Schema;
const Delivery = require('./Delivery').Schema;

const Schema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    topic_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    passing_grade: {
      type: Number,
      required: true,
    },
    is_show_result: {
      type: Boolean,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    questions_id: {
      type: [mongoose.Types.ObjectId],
      required: true,
    },
    success_mgs: {
      type: Paragraph,
      required: true,
    },
    fail_msg: {
      type: Paragraph,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    delivery: {
      type: Delivery,
      required: false,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model('Quizzes', Schema);
module.exports = { Model, Schema };

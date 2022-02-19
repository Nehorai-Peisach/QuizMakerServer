const mongoose = require('mongoose');
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
      type: String,
      required: true,
    },
    fail_msg: {
      type: String,
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

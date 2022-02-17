const mongoose = require('mongoose');
const log = require('../helpers/logger');
const Quiz = require('../models/Quiz');

module.exports = class QuizesRepository {
  constructor(config) {
    this.table = config.get('db.table.quizes');
  }

  async addQuiz(input) {
    await Quiz.Model.create(input)
      .then((result) => {
        return result;
      })
      .catch((err) => log(err));
  }

  async deleteQuiz(input) {
    await Quiz.Model.deleteOne(input)
      .then((result) => {
        return result;
      })
      .catch((err) => log(err));
  }

  async getQuiz(input) {
    let res="";
    await Quiz.Model.find()
      .then((q)=>q.find((q)=>q.Topic.Id==input))
      // .then((q)=>q.Topic.Id==input)
      .then((result) => {
        console.log(result);
        res= result;
      })
      .catch((err) => log(err));
  return res;
    }

  async getQuizes() {
    let res;
    await Quiz.Model.find()
      .then((result) => {
        res = result;
      })
      .catch((err) => log(err));
    return res;
  }

  async updateQuiz(oldQuiz, newQuiz) {
    await Quiz.Model.updateOne(oldTest, newQuiz)
      .where(input)
      .then((result) => {
        return result;
      })
      .catch((err) => log(err));
  }
};

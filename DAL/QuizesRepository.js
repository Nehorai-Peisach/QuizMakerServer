const log = require("../helpers/logger");
const Quiz = require("../models/Quiz");

module.exports = class QuizesRepository {
  constructor(config) {
    this.table = config.get("db.table.quizes");
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
    await Quiz.Model.find(Quiz.Schema)
      .where(input)
      .then((result) => {
        return result;
      })
      .catch((err) => log(err));
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

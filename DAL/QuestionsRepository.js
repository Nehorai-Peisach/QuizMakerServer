const log = require("../helpers/logger");
const Question = require("../models/Question");

module.exports = class QuestionsRepository {
  constructor(config) {
    this.table = config.get("db.table.questions");
  }

  async addQuestion(input) {
    await Question.Model.create(input)
      .then((result) => {
        return result;
      })
      .catch((err) => log(err));
  }

  async deleteQuestion(input) {
    await Question.Model.deleteOne(input)
      .then((result) => {
        return result;
      })
      .catch((err) => log(err));
  }

  async getQuestion(input) {
    await Question.Model.find(Question.Schema)
      .where(input)
      .then((result) => {
        return result;
      })
      .catch((err) => log(err));
  }
  async getAllQuestions() {
    let res;
    await Question.Model.find(Question.Schema)
      .then((result) => {
        res = result;
      })
      .catch((err) => log(err));
    return res;
  }
  async updateQuestion(oldQuestion, newQuestion) {
    await Question.Model.updateOne(oldQuestion, newQuestion)
      .where(input)
      .then((result) => {
        return result;
      })
      .catch((err) => log(err));
  }
};

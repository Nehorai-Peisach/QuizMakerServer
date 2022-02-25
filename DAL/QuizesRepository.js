const mongoose = require('mongoose');
const quizAgg = require('./aggregates/quizAgg');

module.exports = class QuizesRepository {
  constructor(logger, quiz) {
    this.logger = logger;
    this.model = quiz.Model;
    this.schema = quiz.Schema;
  }

  async getAllQuizes() {
    let res;
    await this.model
      .aggregate(quizAgg())
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async addQuiz(input) {
    let res;

    const quiz = {
      _id: new mongoose.Types.ObjectId(),
      topic_id: new mongoose.Types.ObjectId('620eafff891632706a523b5d'),
      ...input,
    };
    await this.model
      .create(quiz)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async deleteQuiz(quiz) {
    await this.model
      .deleteOne({ _id: quiz._id })
      .then((result) => {
        return result;
      })
      .catch((err) => this.logger(err));
  }

  async updateQuiz(quiz) {
    await this.deleteQuiz(quiz);
    await this.addQuiz(quiz);
  }
};

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
      .catch((err) => this.logger.error(err));

    return res;
  }

  async addQuiz(input) {
    let res;

    const quiz = {
      topic_id: new mongoose.Types.ObjectId('620eafff891632706a523b5d'),
      ...input,
    };
    if (quiz._id === undefined) quiz._id = new mongoose.Types.ObjectId();
    await this.model
      .create(quiz)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger.error(err));

    return res;
  }

  async deleteQuiz(quiz) {
    let res;
    await this.model
      .deleteOne({ _id: quiz._id })
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger.error(err));
    return res;
  }

  async updateQuiz(quiz) {
    await this.deleteQuiz(quiz);
    await this.addQuiz(quiz);
  }
};

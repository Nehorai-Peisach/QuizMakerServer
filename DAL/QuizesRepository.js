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
    await this.model
      .create(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async deleteQuiz(input) {
    await this.model
      .deleteOne(input)
      .then((result) => {
        return result;
      })
      .catch((err) => this.logger(err));
  }

  async updateQuiz(oldQuiz, newQuiz) {
    let res;
    await this.model
      .updateOne(oldTest, newQuiz)
      .where(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }
};

const complitedAgg = require('./aggregates/complitedAgg');

module.exports = class CompletedQuizesRepository {
  constructor(logger, completedQuiz) {
    this.logger = logger;
    this.model = completedQuiz.Model;
    this.schema = completedQuiz.Schema;
  }

  async getAllCompletedQuiz() {
    let res;
    await this.model
      .aggregate(complitedAgg())
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async addCompletedQuiz(quiz) {
    let res;

    await this.model
      .create(quiz)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async deleteCompletedQuiz(input) {
    await this.model
      .deleteOne(input)
      .then((result) => {
        return result;
      })
      .catch((err) => this.logger(err));
  }

  async updateCompletedQuiz(oldQuiz, newQuiz) {
    let res;
    await this.model
      .updateOne(oldQuiz, newQuiz)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }
};

module.exports = class QuestionsRepository {
  constructor(logger, question) {
    this.logger = logger;
    this.model = question.Model;
    this.schema = question.Schema;
  }

  async getAllQuestions() {
    let res;
    // await this.model
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: 'topics',
    //         let: { topics_id: '$topics_id' },
    //         pipeline: [{ $match: { $expr: { $eq: ['$_id', '$$topics_id'] } } }],
    //         as: 'topics',
    //       },
    //     },
    //     {
    //       $project: {
    //         _id: true,
    //         topics: true,
    //         type: true,
    //         text: true,
    //         lower_text: true,
    //         answers: true,
    //         tags: true,
    //       },
    //     },
    //   ])
    await this.model
      .find(this.schema)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async addQuestion(input) {
    let res;
    await this.model
      .create(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async deleteQuestion(input) {
    let res;
    await this.model
      .deleteOne(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async updateQuestion(oldQuestion, newQuestion) {
    let res;
    await this.model
      .updateOne(oldQuestion, newQuestion)
      .where(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }
};

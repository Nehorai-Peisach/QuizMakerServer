const mongoose = require('mongoose');

module.exports = class QuestionsRepository {
  constructor(logger, question) {
    this.logger = logger;
    this.model = question.Model;
    this.schema = question.Schema;
  }

  async getAllQuestions() {
    let res;
    await this.model
      .aggregate([
        {
          $lookup: {
            as: 'topics',
            from: 'topics',
            let: { topics_id: '$topics_id' },

            pipeline: [
              { $match: { $expr: { $in: ['$_id', '$$topics_id'] } } },
              {
                $lookup: {
                  as: 'company',
                  from: 'companies',
                  let: { company_id: '$company_id' },
                  pipeline: [{ $match: { $expr: { $eq: ['$_id', '$$company_id'] } } }],
                },
              },
              {
                $unwind: {
                  path: '$company',
                  preserveNullAndEmptyArrays: true,
                },
              },
              {
                $project: {
                  company_id: false,
                },
              },
            ],
          },
        },
        {
          $project: {
            topics_id: false,
          },
        },
      ])
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger.error(err));

    return res;
  }

  async addQuestion(input) {
    let res;

    const question = {
      topic_id: new mongoose.Types.ObjectId('620eafff891632706a523b5d'),
      ...input,
    };
    if (question._id === undefined) question._id = new mongoose.Types.ObjectId();
    await this.model;
    await this.model
      .create(question)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger.error(err));

    return res;
  }

  async deleteQuestion(question) {
    let res;
    await this.model
      .deleteOne({ _id: question._id })
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger.error(err));

    return res;
  }

  async updateQuestion(question) {
    await this.deleteQuestion(question);
    await this.addQuestion(question);
  }
};

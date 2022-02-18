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

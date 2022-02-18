module.exports = class QuizesRepository {
  constructor(logger, quiz) {
    this.logger = logger;
    this.model = quiz.Model;
    this.schema = quiz.Schema;
  }

  async getAllQuizes() {
    let res;
    await this.model
      .aggregate([
        {
          $lookup: {
            as: 'questions',
            from: 'questions',
            let: { questions_id: '$questions_id' },
            pipeline: [{ $match: { $expr: { $in: ['$_id', '$$questions_id'] } } }],
          },
        },
        {
          $lookup: {
            as: 'topic',
            from: 'topics',
            let: { topic_id: '$topic_id' },
            pipeline: [
              { $match: { $expr: { $eq: ['$_id', '$$topic_id'] } } },
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
        // {
        //   $project: {
        //     _id: true,
        //     topic: true,
        //     language: true,
        //     type: true,
        //     name: true,
        //     passing_grade: true,
        //     is_show_result: true,
        //     header: true,
        //     questions: true,
        //     success_mgs: true,
        //     fail_msg: true,
        //     date: true,
        //   },
        // },
      ])
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

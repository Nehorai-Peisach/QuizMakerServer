module.exports = class CompletedQuizesRepository {
  constructor(logger, completedQuiz) {
    this.logger = logger;
    this.model = completedQuiz.Model;
    this.schema = completedQuiz.Schema;
  }

  async getAllCompletedQuiz() {
    let res;
    await this.model
      .aggregate([
        {
          $lookup: {
            from: 'quizzes',
            as: 'quiz',
            let: { quiz_id: '$quiz_id' },
            pipeline: [{ $match: { $expr: { $eq: ['$_id', '$$quiz_id'] } } }],
          },
          $lookup: {
            from: 'students',
            as: 'student',
            let: { student_id: '$student_id' },
            pipeline: [{ $match: { $expr: { $eq: ['$_id', '$$student_id'] } } }],
          },
        },
        {
          $project: {
            _id: true,
            quiz: true,
            student: true,
            student_answers: true,
            score: true,
            date: true,
          },
        },
      ])
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async addCompletedQuiz(input) {
    let res;
    await this.model.create(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => log(err));

    return res;
  }

  async deleteCompletedQuiz(input) {
    await this.model.deleteOne(input)
      .then((result) => {
        return result;
      })
      .catch((err) => log(err));
  }

  async updateCompletedQuiz(oldQuiz, newQuiz) {
    let res;
    await this.model.updateOne(oldTest, newQuiz)
      .where(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => log(err));

    return res;
  }
};

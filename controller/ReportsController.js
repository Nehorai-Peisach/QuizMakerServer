const mongoose = require("mongoose");

module.exports = class ReportsController {
  constructor(completedQuizesRepo) {
    this.completedQuizesRepo = completedQuizesRepo;
  }

  // Get all Quizes completed between two dates.
  async getReportByQuiz(params) {
    const quizes = await this.completedQuizesRepo.getAllCompletedQuiz();
    let result = quizes.filter(
      (q) =>
        q.quiz._id.toString() === params.quiz_id &&
        new Date(q.date).getTime() >= new Date(params.fromDate).getTime() &&
        new Date(q.date).getTime() <= new Date(params.toDate).getTime()
    );

    return result;
  }

  // Get all Quizes completed between two dates.
  async getReportByStudent(params) {
    const quizes = await this.completedQuizesRepo.getAllCompletedQuiz();
    let result = quizes.filter(
      (q) =>
        q.quiz._id.toString() === params.
    );

    return result;
  }
};

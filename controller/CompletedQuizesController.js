const mongoose = require('mongoose');
const CalculateScore = require('../helpers/CalculateScore');

module.exports = class QuizesController {
  constructor(completedQuizesRepo) {
    this.repo = completedQuizesRepo;
  }

  // Get all Quiz
  async getAllCompletedQuiz() {
    const result = await this.repo.getAllCompletedQuiz();
    return result;
  }

  // Add quiz to the list
  async addCompletedQuiz(input) {
    let result;
    const score = CalculateScore(input.studentAnswers, input.quiz);
    const tmpQuiz = {
      _id: new mongoose.Types.ObjectId(),
      quiz_id: input.quiz._id,
      student_id: input.student._id,
      student_answers: input.studentAnswers,
      score: score,
      date: Date.now(),
    };

    await this.repo.addCompletedQuiz(tmpQuiz);

    if (score >= input.quiz.passing_grade) result = input.quiz.success_msg;
    else result = input.quiz.fail_msg;

    return result;
  }

  // Delete quiz to the list
  async deleteCompletedQuiz(quiz) {
    const result = await this.repo.deleteCompletedQuiz(quiz);
    return result;
  }

  // Update quiz to the list
  async updateCompletedQuiz(quiz) {
    const result = await this.repo.updateCompletedQuiz(quiz);
    return result;
  }
};

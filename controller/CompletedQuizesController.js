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

    let result = {
      quiz: input,
      score: score,
    };

    if (score >= input.quiz.passing_grade) result.is_pass = true;
    else result.is_pass = false;

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

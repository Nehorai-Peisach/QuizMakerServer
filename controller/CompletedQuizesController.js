const mongoose = require("mongoose");

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
  async addCompletedQuiz(quiz) {
    const tmpQuiz = {
      _id: new mongoose.Types.ObjectId(),
      ...quiz,
    };

    const result = await this.repo.addCompletedQuiz(tmpQuiz);
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

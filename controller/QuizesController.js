const mongoose = require('mongoose');

module.exports = class QuizesController {
  constructor(quizesRepo) {
    this.repo = quizesRepo;
  }

  // Get all Quiz
  async getAllQuizes() {
    const result = await this.repo.getAllQuizes();
    return result;
  }

  // Add quiz to the list
  async addQuiz(quiz) {
    const tmpQuiz = { _id: new mongoose.Types.ObjectId(), ...quiz };

    const result = await this.repo.addQuiz(tmpQuiz);
    return result;
  }

  // Delete quiz to the list
  async deleteQuiz(quiz) {
    const result = await this.repo.deleteQuiz(quiz);
    return result;
  }

  // Update quiz to the list
  async updateQuiz(quiz) {
    const result = await this.repo.updateQuiz(quiz);
    return result;
  }
};

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

  // Get one Quiz by id
  async getQuizById(id) {
    const tmpId = mongoose.Types.ObjectId(id);
    const tmp = await this.repo.getAllQuizes();
    const result = tmp.filter((x) => x._id !== tmpId);
    console.log(result);
    return result;
  }

  // Add quiz to the list
  async addQuiz(quiz) {
    const result = await this.repo.addQuiz(quiz);
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

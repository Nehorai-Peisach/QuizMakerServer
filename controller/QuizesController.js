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
    const tmp = await this.repo.getAllQuizes();
    let result = tmp.find((x) => {
      if (x._id.toString() === id) {
        return x;
      }
    });
    return result;
  }

  // Add quiz to the list
  async addQuiz(quiz) {
    const old = await this.getQuizById(quiz._id);
    let result;
    if (!old) result = await this.repo.addQuiz(quiz);
    else result = await this.updateQuiz(quiz);
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

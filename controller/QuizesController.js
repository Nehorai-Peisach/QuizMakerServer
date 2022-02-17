module.exports = class QuizesController {
  constructor(quizesRepo) {
    this.repo = quizesRepo;
  }

  // Add question to the list
  async addQuiz(quiz) {
    const result = await this.repo.addQuiz(quiz);
    return result;
  }

  async getQuizes() {
    const result = await this.repo.getQuizes("hi");
    return result;
  }

  async getQuiz(topicId) {
    const result = await this.repo.getQuiz(topicId);
    return result;
  }
};

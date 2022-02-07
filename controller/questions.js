module.exports = class QuestionsController {
  constructor(questionsRepo) {
    this.repo = questionsRepo
  }
  // Get Questions
  async getAllQuestions() {
    return await this.repo.getAllQuestions()
  }

  // Add question to the list
  async addQuestion(question) {
    return await this.repo.addQuestion(question)
  }
}

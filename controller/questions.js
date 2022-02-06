const container = require('../settings/containerConfig')
const repo = container.resolve('questionsRepo')

class QuestionsController {
  // Get Questions
  async getAllQuestions() {
    return await repo.getAllQuestions()
  }

  // Add question to the list
  async addQuestion(question) {
    return await repo.addQuestion(question)
  }
}

module.exports = new QuestionsController()

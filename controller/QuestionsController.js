const mongoose = require('mongoose');

module.exports = class QuestionsController {
  constructor(questionsRepo) {
    this.repo = questionsRepo;
  }
  // Get all Questions
  async getAllQuestions() {
    const result = await this.repo.getAllQuestions();
    return result;
  }

  // Get filterd Questions by topic
  async getQuestionByTopic(topic) {
    const all = await this.repo.getAllQuestions();
    const result = all.filter((question) => {
      question.topic._id === topic._id;
    });
    return result;
  }

  // Add question to the list
  async addQuestion(question) {
    const tmpQuestion = { _id: new mongoose.Types.ObjectId(), ...question };
    
    const result = await this.repo.addQuestion(tmpQuestion);
    return result;
  }

  // Delete question to the list
  async deleteQuestion(question) {
    const result = await this.repo.deleteQuestion(question);
    return result;
  }

  // Update question to the list
  async updateQuestion(question) {
    const result = await this.repo.updateQuestion(question);
    return result;
  }
};

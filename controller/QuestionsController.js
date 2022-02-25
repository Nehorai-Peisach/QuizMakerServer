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

  // Get one Quiz by id
  async getQuestionById(id) {
    const tmp = await this.repo.getAllQuestions();
    let result = tmp.find((x) => {
      if (x._id.toString() === id) {
        return x;
      }
    });
    return result;
  }

  // Add question to the list
  async addQuestion(question) {
    const old = await this.getQuestionById(question._id);
    let result;
    if (!old) result = await this.repo.addQuestion(question);
    else result = await this.updateQuestion(question);
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

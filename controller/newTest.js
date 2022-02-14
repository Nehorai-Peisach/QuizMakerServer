module.exports = class NewTestController {
    constructor(newTestRepo) {
      this.repo = newTestRepo
    }
  
    // Add question to the list
    async addNewTest(newTest) {
      return await this.repo.addNewTest(newTest)
    }
  }
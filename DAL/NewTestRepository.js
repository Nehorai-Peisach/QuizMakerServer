const log = require('../helpers/logger')
const newTest = require('../models/Quiz')

module.exports = class NewTestRepository {
  constructor(config) {
    this.table = config.get('db.table.quizes')
  }

  async addNewTest(input) {
    await newTest.Quiz.create(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }

  async deleteTest(input) {
    await newTest.Model.deleteOne(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }

  async getTest(input) {
    await newTest.Model.find(newTest.Schema)
      .where(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }

  async updateTest(oldTest, NewTestt) {
    await newTest.Model.updateOne(oldTest, newTestt)
      .where(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }
}

const config = require('config')
const Question = require('../models/Question')

module.exports = class QuestionsRepository {
  constructor() {
    this.table = config.get('table.questions')
  }

  async addQuestion(input) {
    const question = new Question({
      Id: input.Id,
      Type: input.Type,
      TopicId: input.TopicId,
      Text: input.Text,
      LowerText: input.LowerText,
      Layout: input.Layout,
      Tags: input.Tags,
    })
    await question
      .save()
      .then((result) => {
        return result
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

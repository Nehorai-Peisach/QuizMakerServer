const awilix = require('awilix')
const db = require('../DAL/MongoDb')
const questionsRepo = require('../DAL/QuestionsRepository')

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC,
})

container.register({
  db: awilix.asClass(db).singleton(),
  questionsRepo: awilix.asClass(questionsRepo).singleton(),
})

module.exports = container

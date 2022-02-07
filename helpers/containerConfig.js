const awilix = require('awilix')
const db = require('../DAL/MongoDb')
const config = require('config')
const questionsRepo = require('../DAL/QuestionsRepository')
const questionsController = require('../controller/questions')

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC,
})

container.register({
  config: awilix.asValue(config),

  db: awilix.asClass(db).singleton(),
  questionsRepo: awilix.asClass(questionsRepo).singleton(),

  questionsController: awilix.asClass(questionsController).singleton(),
})

module.exports = container

const awilix = require('awilix')
const db = require('../DAL/MongoDb')
const config = require('config')
const questionsRepo = require('../DAL/QuestionsRepository')
const questionsController = require('../controller/questions')
const NewTestRepo = require('../DAL/NewTestRepository')
const NewTestController = require('../controller/newTest')
const UsersRepo = require('../DAL/UsersRepository')
const UsersController = require('../controller/users')

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC,
})

container.register({
  config: awilix.asValue(config),

  db: awilix.asClass(db).singleton(),
  questionsRepo: awilix.asClass(questionsRepo).singleton(),
  newTestRepo: awilix.asClass(NewTestRepo).singleton(),
  usersRepo: awilix.asClass(UsersRepo).singleton(),
  questionsController: awilix.asClass(questionsController).singleton(),
  newTestController: awilix.asClass(NewTestController).singleton(),
  usersController: awilix.asClass(UsersController).singleton(),
})

module.exports = container

const awilix = require('awilix');
const db = require('../DAL/MongoDb');
const config = require('config');
const QuestionsRepo = require('../DAL/QuestionsRepository');
const QuestionsController = require('../controller/QuestionsController');
const QuizesRepo = require('../DAL/QuizesRepository');
const QuizesController = require('../controller/QuizesController');
const UsersRepo = require('../DAL/UsersRepository');
const UsersController = require('../controller/UsersController');
const StudentsRepo = require('../DAL/StudentsRepository');
const StudentsController = require('../controller/StudentsController');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC,
});

container.register({
  config: awilix.asValue(config),

  db: awilix.asClass(db).singleton(),

  quizesRepo: awilix.asClass(QuizesRepo).singleton(),
  questionsRepo: awilix.asClass(QuestionsRepo).singleton(),
  usersRepo: awilix.asClass(UsersRepo).singleton(),
  studentsRepo: awilix.asClass(StudentsRepo).singleton(),

  questionsController: awilix.asClass(QuestionsController).singleton(),
  quizesController: awilix.asClass(QuizesController).singleton(),
  usersController: awilix.asClass(UsersController).singleton(),
  studentsController: awilix.asClass(StudentsController).singleton(),
});

module.exports = container;

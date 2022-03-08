const awilix = require('awilix');
const db = require('../DAL/MongoDb');
const config = require('config');
const QuestionsRepo = require('../DAL/QuestionsRepository');
const QuestionsController = require('../controller/QuestionsController');
const QuizesRepo = require('../DAL/QuizesRepository');
const QuizesController = require('../controller/QuizesController');
const ReportsController = require('../controller/ReportsController');
const CompletedQuizesRepo = require('../DAL/CompletedQuizesRepository');
const CompletedQuizesController = require('../controller/CompletedQuizesController');
const UsersRepo = require('../DAL/UsersRepository');
const UsersController = require('../controller/UsersController');
const StudentsRepo = require('../DAL/StudentsRepository');
const StudentsController = require('../controller/StudentsController');
const logger = require('../logger/index');
const asyncHandler = require('./asyncHandler');

const Company = require('../models/Company');
const CompletedQuiz = require('../models/CompletedQuiz');
const Question = require('../models/Question');
const Quiz = require('../models/Quiz');
const Student = require('../models/Student');
const User = require('../models/User');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC,
});

container.register({
  config: awilix.asValue(config),
  logger: awilix.asValue(logger),
  asyncHandler: awilix.asValue(asyncHandler),

  db: awilix.asClass(db).singleton(),

  quizesRepo: awilix.asClass(QuizesRepo).singleton(),
  completedQuizesRepo: awilix.asClass(CompletedQuizesRepo).singleton(),
  questionsRepo: awilix.asClass(QuestionsRepo).singleton(),
  usersRepo: awilix.asClass(UsersRepo).singleton(),
  studentsRepo: awilix.asClass(StudentsRepo).singleton(),

  questionsController: awilix.asClass(QuestionsController).singleton(),
  quizesController: awilix.asClass(QuizesController).singleton(),
  reportsController: awilix.asClass(ReportsController).singleton(),
  completedQuizesController: awilix.asClass(CompletedQuizesController).singleton(),
  usersController: awilix.asClass(UsersController).singleton(),
  studentsController: awilix.asClass(StudentsController).singleton(),

  company: awilix.asValue(Company),
  completedQuiz: awilix.asValue(CompletedQuiz),
  question: awilix.asValue(Question),
  quiz: awilix.asValue(Quiz),
  student: awilix.asValue(Student),
  user: awilix.asValue(User),
});

module.exports = container;

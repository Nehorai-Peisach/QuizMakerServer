module.exports = class DbConfig {
  constructor() {
    init()
  }

  init() {
    const paragraph = require('../models/Paragraph')
    const emailDelivery = require('../models/EmailDelivery')

    const QuizScema = new MongoClient.Schema({})

    const CompanyScema = new MongoClient.Schema({
      ID: String,
      name: String,
    })

    const AnswerScema = new MongoClient.Schema({
      ID: String,
      Text: String,
      IsCorrect: Boolean,
    })

    const CompletedQuizScema = new MongoClient.Schema({
      ID: String,
      Topic: String,
      Name: String,
      PassingGrade: Number,
      QuestionsId: [String],
      UserId: String,
      AnswersId: [String],
      Score: Number,
      DoneDate: Date,
    })

    this.Quizes = MongoClient.model('Quizes', QuizScema)
    this.Companys = MongoClient.model('Companys', CompanyScema)
    this.Questions = MongoClient.model('Questions', QuestionScema)
    this.Answers = MongoClient.model('Answers', AnswerScema)
    this.CompletedQuizes = MongoClient.model(
      'CompletedQuizes',
      CompletedQuizScema
    )
  }
}

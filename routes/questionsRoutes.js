const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const controller = container.resolve('questionsController');
const asyncHandler = container.resolve('asyncHandler');
const logger = require('../helpers/logs/logger');
const errorer = require('../helpers/errors/errorer');
router.use(express.json());

// Get all the questions from db
// http://localhost:4000/api/questions/getAllQuestions
router.get(
  '/getAllQuestions',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getAllQuestions();
      logger({ getAllQuestions: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ getAllQuestions: { ...err } });
      res.status(400).send(err);
    }
  })
);

// Get questions of specific topic from db
// http://localhost:4000/api/questions/getQuestionsByTopic
router.get(
  '/getQuestionsByTopic',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getQuestionByTopic(req.body);
      logger({ getQuestionsByTopic: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ getQuestionsByTopic: { ...err } });
      res.status(400).send(err);
    }
  })
);

// Add question to the list in db
// http://localhost:4000/api/questions/addQuestion
router.post(
  '/addQuestion',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addQuestion(req.body);
      logger({ addQuestion: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ addQuestion: { ...err } });
      res.status(400).send(err);
    }
  })
);

// delete question from the db
// http://localhost:4000/api/questions/deleteQuestion
router.post(
  '/deleteQuestion',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.deleteQuestion(req.body);
      logger({ deleteQuestion: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ deleteQuestion: { ...err } });
      res.status(400).send(err);
    }
  })
);

// update question in db
// http://localhost:4000/api/questions/updateQuestion
router.post(
  '/updateQuestion',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.updateQuestion(req.body);
      res.status(200).send(data);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  })
);

module.exports = router;

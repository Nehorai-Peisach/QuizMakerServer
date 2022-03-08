const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const logger = container.resolve('logger');
const controller = container.resolve('questionsController');
const asyncHandler = container.resolve('asyncHandler');
router.use(express.json());

// Get all the questions from db
// http://localhost:4000/api/questions/getAllQuestions
router.get(
  '/getAllQuestions',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getAllQuestions();
      logger.debug({ getAllQuestions: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      logger.error({ getAllQuestions: { ...err } });
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
      logger.debug({ getQuestionsByTopic: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      logger.error({ getQuestionsByTopic: { ...err } });
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
      logger.debug({ addQuestion: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      logger.error({ addQuestion: { ...err } });
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
      logger.debug({ deleteQuestion: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      logger.error({ deleteQuestion: { ...err } });
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
      logger.debug({ deleteQuestion: { ...data } });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
      logger.error({ deleteQuestion: { ...data } });
    }
  })
);

module.exports = router;

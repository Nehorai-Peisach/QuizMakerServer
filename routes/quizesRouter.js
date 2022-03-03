const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const controller = container.resolve('quizesController');
const asyncHandler = container.resolve('asyncHandler');
const logger = require('../helpers/logs/logger');
const errorer = require('../helpers/errors/errorer');
router.use(express.json());

// Get all the quiz from db
// http://localhost:4000/api/quizes/getAllQuizes
router.get(
  '/getAllQuizes',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getAllQuizes();
      logger({ getAllQuizes: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ getAllQuizes: { ...err } });
      res.status(400).send(err);
    }
  })
);

// Get one quiz from db by id
// http://localhost:4000/api/quizes/getQuizById
router.get(
  '/getQuizById',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getQuizById(req.query.id);
      logger({ getQuizById: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ getQuizById: { ...err } });
      res.status(400).send(err);
    }
  })
);

// Add quiz to the list in db
// http://localhost:4000/api/quizes/addQuiz
router.post(
  '/addQuiz',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addQuiz(req.body);
      logger({ addQuiz: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ addQuiz: { ...err } });
      res.status(400).send(err);
    }
  })
);

// delete quiz from the db
// http://localhost:4000/api/quizes/deleteQuiz
router.post(
  '/deleteQuiz',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.deleteQuiz(req.body);
      res.status(200).send(data);
    } catch (err) {
      log(err);
      res.status(400).send(err);
    }
  })
);

// update quiz in db
// http://localhost:4000/api/quizes/updateQuiz
router.post(
  '/updateQuiz',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addQuiz(req.body);
      res.status(200).send(data);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  })
);
module.exports = router;

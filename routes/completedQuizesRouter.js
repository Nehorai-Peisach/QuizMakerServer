const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const controller = container.resolve('completedQuizesController');
const asyncHandler = container.resolve('asyncHandler');
const logger = require('../helpers/logs/logger');
const errorer = require('../helpers/errors/errorer');
router.use(express.json());

// Get all the CompletedQuiz from db
// http://localhost:4000/api/completedQuizes/getAllCompletedQuiz
router.get(
  '/getAllCompletedQuiz',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getAllCompletedQuiz();
      logger({ getAllCompletedQuiz: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ getAllCompletedQuiz: { ...err } });
      res.status(400).send(err);
    }
  })
);

// Add CompletedQuiz to the list in db
// http://localhost:4000/api/completedQuizes/addCompletedQuiz
router.post(
  '/addCompletedQuiz',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addCompletedQuiz(req.body);
      logger({ addCompletedQuiz: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ addCompletedQuiz: { ...err } });
      res.status(400).send(err);
    }
  })
);

// delete CompletedQuiz from the db
// http://localhost:4000/api/completedQuizes/deleteCompletedQuiz
router.post(
  '/deleteCompletedQuiz',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.deleteCompletedQuiz(req.body);
      logger({ deleteCompletedQuiz: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ deleteCompletedQuiz: { ...err } });
      res.status(400).send(err);
    }
  })
);

// update CompletedQuiz in db
// http://localhost:4000/api/completedQuizes/updateCompletedQuiz
router.post(
  '/updateCompletedQuiz',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.updateCompletedQuiz(req.body);
      logger({ updateCompletedQuiz: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ updateCompletedQuiz: { ...err } });
      res.status(400).send(err);
    }
  })
);
module.exports = router;

const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const controller = container.resolve('quizesController');
const asyncHandler = require('../helpers/asyncHandler');

router.use(express.json());

// import { GetQuestions } from 'components/helpers/QuestionsRepo';

router.post(
  '/addQuiz',
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

// http://localhost:4000/api/quizes/getQuizes
router.get(
  '/getQuizes',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getQuizes();
      res.status(200).send(data);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  })
);

// http://localhost:4000/api/quizes/getQuiz
router.get(
  '/getQuiz',
  asyncHandler(async (req, res) => {
    try {
      const topicId=req.query.topicId;
      const data = await controller.getQuiz(topicId);
      res.status(200).send(data);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  })
);

module.exports = router;

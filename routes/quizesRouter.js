const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const controller = container.resolve('quizesController');
const asyncHandler = require('../helpers/asyncHandler');

router.use(express.json());

// http://localhost:4000/api/quizes/addQuiz
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

module.exports = router;

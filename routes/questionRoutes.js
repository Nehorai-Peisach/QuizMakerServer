const express = require('express')
const router = express.Router()
const container = require('../helpers/containerConfig')
const controller = container.resolve('questionsController')
const asyncHandler = require('../helpers/asyncHandler')

router.use(express.json())

// Get questions from db
router.get(
  '/getQuestions',
  asyncHandler(async (req, res) => {
    const data = await controller.getAllQuestions()
    res.send(data)
  })
)

// Add question to the list in db
router.post(
  '/addQuestion',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addQuestion(req.body)
      res.status(200).send(data)
    } catch (err) {
      console.log(err)
      res.status(400).send(err)
    }
  })
)

module.exports = router

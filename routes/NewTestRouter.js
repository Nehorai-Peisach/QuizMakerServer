const express = require('express')
const router = express.Router()
const container = require('../helpers/containerConfig')
const controller = container.resolve('newTestController')
const asyncHandler = require('../helpers/asyncHandler')

router.use(express.json())


// Add question to the list in db
// http://localhost:4000/api/quizes/addNewTest
router.post(
  '/addNewTest',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addNewTest(req.body)
      res.status(200).send(data)
    } catch (err) {
      console.log(err)
      res.status(400).send(err)
    }
  })
)

module.exports = router

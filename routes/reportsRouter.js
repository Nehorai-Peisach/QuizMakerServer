const express = require('express')
const router = express.Router()
const container = require('../helpers/containerConfig')
const controller = container.resolve('reportsController')
const asyncHandler = require('../helpers/asyncHandler')

router.use(express.json())

// Get report by quiz and date(between two dates)
// http://localhost:4000/api/reports/getReportByQuiz
router.get(
  '/getReportByQuiz',
  asyncHandler(async (req, res) => {
    const data = await controller.getReportByQuiz(req.query)
    res.send(data)
  })
)

module.exports = router


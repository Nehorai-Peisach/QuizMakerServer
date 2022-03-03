const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const controller = container.resolve('reportsController');
const asyncHandler = require('../helpers/asyncHandler');
const logger = require('../helpers/logs/logger');
const errorer = require('../helpers/errors/errorer');
router.use(express.json());

// Get report by quiz and date(between two dates)
// http://localhost:4000/api/reports/getReportByQuiz
router.get(
  '/getReportByQuiz',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getReportByQuiz(req.query);
      logger({ getReportByQuiz: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ getReportByQuiz: { ...err } });
      res.status(400).send(err);
    }
  })
);
// Get report by student id
// http://localhost:4000/api/reports/getReportByStudent
router.get(
  '/getReportByStudent',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getReportByStudent(req.query);
      logger({ getReportByStudent: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ getReportByStudent: { ...err } });
      res.status(400).send(err);
    }
  })
);

module.exports = router;

const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const controller = container.resolve('studentsController');
const logger = container.resolve('logger');
const asyncHandler = container.resolve('asyncHandler');
router.use(express.json());

// Get students from db
// http://localhost:4000/api/students/getAllStudents
router.get(
  '/getAllStudents',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getAllStudents();
      logger.debug({ getAllStudents: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      logger.error({ getAllStudents: { ...err } });
      res.status(400).send(err);
    }
  })
);

// Add student to the list in db
// http://localhost:4000/api/students/addStudent
router.post(
  '/addStudent',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addStudent(req.body);
      logger.debug({ addStudent: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      logger.error({ addStudent: { ...err } });
      res.status(400).send(err);
    }
  })
);

module.exports = router;

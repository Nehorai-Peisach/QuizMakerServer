const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const controller = container.resolve('studentsController');
const asyncHandler = require('../helpers/asyncHandler');
const logger = require('../helpers/logs/logger');
const errorer = require('../helpers/errors/errorer');
router.use(express.json());

// Get students from db
// http://localhost:4000/api/students/getAllStudents
router.get(
  '/getAllStudents',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getAllStudents();
      logger({ getAllStudents: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ getAllStudents: { ...err } });
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
      logger({ addStudent: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ addStudent: { ...err } });
      res.status(400).send(err);
    }
  })
);

module.exports = router;

const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const controller = container.resolve('usersController');
const asyncHandler = require('../helpers/asyncHandler');
const logger = require('../helpers/logs/logger');
const errorer = require('../helpers/errors/errorer');

router.use(express.json());

// Get users from db
// http://localhost:4000/api/users/getAllUsers
router.get(
  '/getAllUsers',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getAllUsers();
      logger({ getAllUsers: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ getAllUsers: { ...err } });
      res.status(400).send(err);
    }
  })
);

// http://localhost:4000/api/users/getUserByDetails
router.get(
  '/getUserByDetails',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getUserByDetails(req.query);
      logger({ getUserByDetails: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ getUserByDetails: { ...err } });
      res.status(400).send(err);
    }
  })
);

// Add user to the list in db
// http://localhost:4000/api/users/adduser
router.post(
  '/adduser',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addUser(req.body);
      logger({ adduser: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      errorer({ adduser: { ...err } });
      res.status(400).send(err);
    }
  })
);

module.exports = router;

const express = require('express');
const router = express.Router();
const container = require('../helpers/containerConfig');
const controller = container.resolve('usersController');
const asyncHandler = container.resolve('asyncHandler');
const logger = container.resolve('logger');

router.use(express.json());

// Get users from db
// http://localhost:4000/api/users/getAllUsers
router.get(
  '/getAllUsers',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.getAllUsers();
      logger.debug({ getAllUsers: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      logger.error({ getAllUsers: { ...err } });
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
      logger.debug({ getUserByDetails: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      logger.error({ getUserByDetails: { ...err } });
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
      logger.debug({ adduser: { ...data } });
      res.status(200).send(data);
    } catch (err) {
      logger.error({ adduser: { ...err } });
      res.status(400).send(err);
    }
  })
);

module.exports = router;

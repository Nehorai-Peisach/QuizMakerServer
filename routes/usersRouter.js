const express = require('express')
const router = express.Router()
const container = require('../helpers/containerConfig')
const controller = container.resolve('usersController')
const asyncHandler = require('../helpers/asyncHandler')

router.use(express.json())

// Get users from db
// http://localhost:4000/api/users/getusers
router.get(
  '/getUsers',
  asyncHandler(async (req, res) => {
    const data = await controller.getAllUsers()
    res.send(data)
  })
)

// Add user to the list in db
// http://localhost:4000/api/users/adduser
router.post(
  '/adduser',
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addUser(req.body)
      res.status(200).send(data)
    } catch (err) {
      console.log(err)
      res.status(400).send(err)
    }
  })
)

module.exports = router

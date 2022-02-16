const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
  {    
    Id: {
        type: String,
        required: true,
      },
      Name: {
        type: String,
        required: true,
      },
      Password: {
        type: String,
        required: true,
      }
  },
  { timestamps: true }
)

const Model = mongoose.model('Student', Schema)
module.exports = { Model, Schema }


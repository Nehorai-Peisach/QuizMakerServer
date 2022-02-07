const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
  {
    Id: {
      type: String,
      required: true,
    },
    CompanyId: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Topic = mongoose.model('Topic', Schema)
module.exports = { Topic, Schema }

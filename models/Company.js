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
  },
  { timestamps: true }
)

const Company = mongoose.model('Company', Schema)
module.exports = { Company, Schema }

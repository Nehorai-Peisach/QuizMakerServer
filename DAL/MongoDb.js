const config = require('config')
const mongoose = require('mongoose')

module.exports = class MongoDb {
  constructor() {
    this.uri = config.get('database.uri')
  }

  connect() {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
          console.log('connected')
          resolve(result)
        })
        .catch((error) => reject(error))
    })
  }
}

const mongoose = require('mongoose');

module.exports = class MongoDb {
  constructor(config) {
    this.uri = config.get('db.uri');
  }

  connect() {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
          resolve(result);
        })
        .catch((error) => reject(error));
    });
  }
};

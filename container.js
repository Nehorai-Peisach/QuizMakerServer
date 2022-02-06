const awilix = require('awilix')
const dbConfig = require('./DAL/dbConfig')
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC,
})

container.register({
  dbConfig: awilix.asClass(dbConfig).singleton(),
})

module.exports = container

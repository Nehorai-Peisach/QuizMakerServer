const log = require('../helpers/logger')
const User = require('../models/User')

module.exports = class UsersRepository {
  constructor(config) {
    this.table = config.get('db.table.users')
  }

  async addUser(input) {
    await User.Model.create(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }

  async deleteUser(input) {
    await User.Model.deleteOne(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }

  async getUser(input) {
    await User.Model.find(User.Schema)
      .where(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }

  async updateUser(oldUser, newUser) {
    await User.Model.updateOne(oldUser, newUser)
      .where(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }
}

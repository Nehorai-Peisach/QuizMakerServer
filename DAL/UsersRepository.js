module.exports = class UsersRepository {
  constructor(logger, user) {
    this.logger = logger;
    this.model = user.Model;
    this.schema = user.Schema;
  }

  async addUser(input) {
    let res;
    await this.model
      .create(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger.error(err));
    return res;
  }

  async deleteUser(input) {
    let res;
    await this.model
      .deleteOne(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger.error(err));
    return res;
  }

  async getUser(input) {
    let res;
    await this.model
      .find(this.schema)
      .where(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger.error(err));
    return res;
  }

  async getAllUsers() {
    let res;
    await this.model
      .find(this.schema)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger.error(err));
    return res;
  }

  async updateUser(oldUser, newUser) {
    let res;
    await this.model
      .updateOne(oldUser, newUser)
      .where(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger.error(err));
    return res;
  }
};

const mongoose = require('mongoose');

module.exports = class UsersController {
  constructor(usersRepo) {
    this.repo = usersRepo;
  }
  // Get users
  async getAllUsers() {
    return await this.repo.getAllUsers();
  }

  async getUserByDetails(user) {
    const tmp = await this.repo.getAllUsers();
    const result = tmp.find((x) => x._doc.username === user.username && x._doc.password === user.password);
    return result;
  }
  // Add user to the list
  async addUser(user) {
    const tmpUser = { _id: new mongoose.Types.ObjectId(), ...user };
    const result = await this.repo.addUser(tmpUser);
    return result;
  }
};

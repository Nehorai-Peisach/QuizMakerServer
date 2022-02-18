const mongoose = require('mongoose');

module.exports = class UsersController {
  constructor(usersRepo) {
    this.repo = usersRepo;
  }
  // Get users
  async getAllUsers() {
    return await this.repo.getAllUsers();
  }

  // Add user to the list
  async addUser(user) {
    const tmpUser = { _id: new mongoose.Types.ObjectId(), ...user };
    const result = await this.repo.addUser(tmpUser);
    return result;
  }
};

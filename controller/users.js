module.exports = class UsersController {
    constructor(usersRepo) {
      this.repo = usersRepo
    }
    // Get users
    async getAllUsers() {
      return await this.repo.getAllUsers()
    }
  
    // Add user to the list
    async addUser(user) {
      return await this.repo.addUser(user)
    }
  }
  
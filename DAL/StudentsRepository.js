const log = require('../helpers/logger')
const Student = require('../models/Student')

module.exports = class StudentRepository {
  constructor(config) {
    this.table = config.get('db.table.student')
  }

  async addStudent(input) {
    await Student.Model.create(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }

  async deleteStudent(input) {
    await Student.Model.deleteOne(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }

  async getStudent(input) {
    await Student.Model.find(Student.Schema)
      .where(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }

  async updateStudent(oldStudent, newStudent) {
    await Student.Model.updateOne(oldStudent, newStudent)
      .where(input)
      .then((result) => {
        return result
      })
      .catch((err) => log(err))
  }
}


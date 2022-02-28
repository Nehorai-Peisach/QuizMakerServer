const mongoose = require('mongoose');

module.exports = class StudentRepository {
  constructor(logger, student) {
    this.logger = logger;
    this.model = student.Model;
    this.schema = student.Schema;
  }

  async getAllStudents() {
    let res;
    await this.model
      .find()
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async addStudent(student) {
    let res;
    if (student._id === undefined) student._id = new mongoose.Types.ObjectId();

    await this.model
      .create(student)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async deleteStudent(student) {
    let res;
    await this.model
      .deleteOne({ _id: student._id })
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }

  async updateStudent(student) {
    await this.deleteStudent(student);
    await this.addStudent(student);
  }
};

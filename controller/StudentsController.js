const mongoose = require('mongoose');

module.exports = class StudentsController {
  constructor(studentsRepo) {
    this.repo = studentsRepo;
  }
  // Get students
  async getAllStudents() {
    const result = await this.repo.getAllStudents();
    return result;
  }

  // Add student to the list
  async addStudent(student) {
    const tmpStudent = { _id: new mongoose.Types.ObjectId(), ...student };
    const result = await this.repo.addStudent(tmpStudent);
    return result;
  }
};

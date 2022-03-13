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

  async getQuizByDetails(student) {
    const tmp = await this.repo.getAllStudents();
    const result = tmp.find((x) => {
      if (x.email.toLowerCase() === student.email.toLowerCase()) return x;
    });
    return result;
  }

  // Add student to the list
  async addStudent(student) {
    const old = await this.getQuizByDetails(student);
    let result;

    if (old === undefined) result = await this.repo.addStudent(student);
    else result = old;

    return result;
  }
};

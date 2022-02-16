module.exports = class StudentsController {
    constructor(studentsRepo) {
      this.repo = studentsRepo
    }
    // Get students
    async getAllStudents() {
      return await this.repo.getAllStudents()
    }
  
    // Add student to the list
    async addStudent(student) {
      return await this.repo.addStudent(student)
    }
  }
  

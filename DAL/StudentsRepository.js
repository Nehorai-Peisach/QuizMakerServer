module.exports = class StudentRepository {
  constructor(logger, student) {
    this.logger = logger;
    this.model = student.Model;
    this.schema = student.Schema;
  }

  async getAllStudents() {
    let res;
    await this.model
      .find(this.schema)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }
  async addStudent(input) {
    let res;
    await this.model
      .create(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));
    return res;
  }
  async deleteStudent(input) {
    let res;
    await this.model
      .deleteOne(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }
  async updateStudent(oldStudent, newStudent) {
    let res;
    await this.model
      .updateOne(oldStudent, newStudent)
      .where(input)
      .then((result) => {
        res = result;
      })
      .catch((err) => this.logger(err));

    return res;
  }
};

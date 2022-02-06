const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const jsonFileName = "./data/jsonAsDb.json";

class DBQuestionsRepository {
  async getAllQuestions() {
    const data = JSON.parse(await readFile(jsonFileName));
    return data;
  }

  async addQuestion(question) {
    let data = JSON.parse(await readFile(jsonFileName));
    const biggestId = Math.max.apply(
      Math,
      data.map((question) => question.Id)
    );
    const newQuestion = { Id: biggestId + 1, Title: question.Title };
    data.push(newQuestion);
    await writeFile(jsonFileName, JSON.stringify(data));
    return newQuestion;
  }
}

module.exports = new DBQuestionsRepository();

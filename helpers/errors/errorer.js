const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const errorsData = require('./errorsData.json');

const errorer = async (input) => {
  const data = JSON.parse(await readFile(errorsData));
  data.push(input);
  await writeFile(errorsData, JSON.stringify(data));
};

module.exports = errorer;

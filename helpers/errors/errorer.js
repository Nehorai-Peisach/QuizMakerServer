const fs = require('fs');

const errorer = async (input) => {
  fs.readFile('helpers/errors/errorsData.json', (err, content) => {
    if (err) throw err;
    let parseJson = JSON.parse(content);
    parseJson.errors.push(input);
    fs.writeFile('helpers/errors/errorsData.json', JSON.stringify(parseJson), (err) => {
      if (err) throw err;
    });
  });
};

module.exports = errorer;

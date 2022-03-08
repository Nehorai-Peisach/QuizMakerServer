const fs = require('fs');

const write = async (input) => {
  fs.readFile('helpers/writeToFile/data.json', (err, content) => {
    if (err) throw err;
    let parseJson = JSON.parse(content);
    parseJson.data.push(input);
    fs.writeFile('helpers/writeToFile/data.json', JSON.stringify(parseJson), (err) => {
      if (err) throw err;
    });
  });
};

module.exports = write;

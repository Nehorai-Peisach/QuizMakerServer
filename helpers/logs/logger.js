const fs = require('fs');
const logger = async (input) => {
  fs.readFile('helpers/logs/logsData.json', (err, content) => {
    if (err) throw err;
    let parseJson = JSON.parse(content);
    const obj = { Request: Object.keys(input)[0], Date: Date.now() };
    parseJson.logs.push(obj);
    fs.writeFile('helpers/logs/logsData.json', JSON.stringify(parseJson), (err) => {
      if (err) throw err;
    });
  });
};

module.exports = logger;

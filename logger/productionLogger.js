const { createLogger, format, transports, debug } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const productionLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(timestamp(), myFormat),
    transports: [new transports.Console(), new transports.File({ filename: 'myErrors.log' })],
  });
};

module.exports = productionLogger;

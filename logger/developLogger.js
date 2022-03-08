const { createLogger, format, transports, debug } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const developLogger = () => {
  return createLogger({
    level: 'debug',
    format: combine(format.colorize(), timestamp({ format: 'HH:mm:ss' }), myFormat),
    transports: [new transports.Console()],
  });
};

module.exports = developLogger;

const { createLogger, transports } = require('winston');
const { join } = require('path');
const logger = createLogger({
  level: 'silly',
  transports: [
    new transports.Console(),
    new transports.File({
      level: 'warn',
      filename: join(__dirname, '../logs/.test'),
    }),
  ],
});

module.exports = logger;

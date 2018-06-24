const mongoose = require('mongoose');
const logger = require('./logger');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    logger.silly('Database Connected');
  })
  .catch(err => logger.error(`Database Error ${err}`));

const mongoose = require('mongoose');

const config = require('config/config');

mongoose
  .connect(config.MONGO_URI, {
    dbName: config.MONGO_INITDB_DATABASE,
    user: config.MONGO_INITDB_ROOT_USERNAME,
    pass: config.MONGO_INITDB_ROOT_PASSWORD,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(err => {
    console.error(err);
  });

mongoose.connection
  .on('connected', () => {
    console.log('database: connected');
  })
  .on('disconnected', () => {
    console.log('database: disconnected');
  })
  .on('error', err => {
    console.error(err);
  })
  .on('reconnected', () => {
    console.log('database: reconnected');
  });

module.exports = mongoose;

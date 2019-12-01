const path = require('path');

require('dotenv').config({ path: path.join(__dirname, 'dev.env') });

module.exports = {
  JSONWEBTOKEN_SECRET: process.env.JSONWEBTOKEN_SECRET,
  MONGO_INITDB_DATABASE: process.env.MONGO_INITDB_DATABASE,
  MONGO_INITDB_ROOT_USERNAME: process.env.MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD: process.env.MONGO_INITDB_ROOT_PASSWORD,
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
};

const express = require('express');

require('./database/database');

const app = express();

app.get('/example', (req, res) => {
  res.status(200).send({ example: 'example' });
});

module.exports = app;

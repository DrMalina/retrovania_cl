const express = require('express');

const app = express();

app.get('/example', (req, res) => {
  res.status(200)
    .send({ example: 'example' });
});

module.exports = app;

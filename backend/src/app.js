const express = require('express');
const routes = require('./routes/rootRoute');

const app = express();

app.use(express.json());
app.use('/api', routes);

module.exports = app;

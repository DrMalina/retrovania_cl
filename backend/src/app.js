const cors = require('cors');
const express = require('express');
const passport = require('passport');

const routes = require('routes/rootRoute');
require('services/passport');

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/api', routes);

module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');

require('./database/database');

const app = express();
const port = 3000;


app.get('/example', (req, res) => {
  res.status(200).send({ example: 'example' });
});
// using post method & request body to avoid exposing data
// express post handler
// body parser - by default express doesn't provide access to req body
// hash the password
// authentication flow (new user / registered), connection to the database - probably a separate file
// redirect user & send token
// middleware for handling token
// Connecting to MongoDB. Uri required

try {
  mongoose.connect('mongodb://127.0.0.1:27017/User')
    .then(() => console.log('Now connected to MongoDB'))
    .catch(err => console.log('Something went wrong'));
} catch(error) {
  console.log(error);
}


app.use(express.json()); // This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.
app.use('/api/users', users); // API endpoint

// Homepage added at route '/'
app.get('/', (req, res) => {
  res.status(200)
    .send(`Hit home page`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;

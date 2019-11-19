const express = require('express');
const signUp = require('../controllers/users/signUp');

const router = express.Router();

router.post('/signup', signUp);

module.exports = router;

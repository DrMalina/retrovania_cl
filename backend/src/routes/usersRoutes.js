const express = require('express');
const signUp = require('../controllers/users/signUp');
const signOn = require('../controllers/users/signOn');

const router = express.Router();

router.post('/signup', signUp);
router.post('/', signOn);

module.exports = router;

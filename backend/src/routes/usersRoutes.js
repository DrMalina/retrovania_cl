const express = require('express');
const passport = require('passport');
const usersControllers = require('../controllers/users');

const router = express.Router();

// C for CREATE:

router.post(
  '/reauthorize',
  passport.authenticate('jwt', { session: false }),
  usersControllers.reauthorize,
);

router.post('/signin', passport.authenticate('local', { session: false }), usersControllers.signIn);

router.post('/signout', passport.authenticate('jwt', { session: false }), usersControllers.signOut);

router.post('/signup', usersControllers.signUp);

// R for READ:

router.get('/', passport.authenticate('jwt', { session: false }), usersControllers.fetchCurrent);

// U for UPDATE:

router.patch('/', passport.authenticate('jwt', { session: false }), usersControllers.updateCurrent);

// D for DELETE:

router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  usersControllers.deleteCurrent,
);

module.exports = router;

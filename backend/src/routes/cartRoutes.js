const { Router } = require('express');
const passport = require('passport');

const cartControllers = require('controllers/cart');

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), cartControllers.fetchCurrent);

module.exports = router;

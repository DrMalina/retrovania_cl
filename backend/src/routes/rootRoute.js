const { Router } = require('express');

const cartRoutes = require('./cartRoutes');
const gamesRoutes = require('./gamesRoutes');
const usersRoutes = require('./usersRoutes');

const router = Router();

router.use('/cart', cartRoutes);
router.use('/games', gamesRoutes);
router.use('/users', usersRoutes);

module.exports = router;

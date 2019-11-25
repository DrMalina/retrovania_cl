const { Router } = require('express');

const gamesRoutes = require('./gamesRoutes');
const usersRoutes = require('./usersRoutes');

const router = Router();

router.use('/games', gamesRoutes);
router.use('/users', usersRoutes);

module.exports = router;

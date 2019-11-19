const { Router } = require('express');
const usersRoutes = require('./usersRoutes');

const router = Router();

router.use('/users', usersRoutes);

module.exports = router;

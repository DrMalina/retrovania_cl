const { Router } = require('express');
const gamesControllers = require('../controllers/games');

const router = Router();

router.get('/', gamesControllers.getGames);

module.exports = router;

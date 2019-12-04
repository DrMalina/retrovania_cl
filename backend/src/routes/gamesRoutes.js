const { Router } = require('express');
const gamesControllers = require('../controllers/games');

const router = Router();

router.get('/', gamesControllers.getGames);
router.get('/:gameId', gamesControllers.getGame);

module.exports = router;

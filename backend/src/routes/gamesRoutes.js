const { Router } = require('express');
const getGames = require('../controllers/games/getGames');
const getGame = require('../controllers/games/getGame');

const router = Router();

router.get('/', getGames);
router.get('/:gameId', getGame);

module.exports = router;

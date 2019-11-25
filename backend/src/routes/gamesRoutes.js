const { Router } = require('express');
const getGames = require('../controllers/games/getGames');

const router = Router();

router.get('/', getGames);

module.exports = router;

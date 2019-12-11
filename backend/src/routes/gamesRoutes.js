const { Router } = require('express');

const gamesControllers = require('controllers/games');
const passport = require('passport');
const isAdmin = require('middlewares/isAdmin');

const router = Router();

router.get('/', gamesControllers.getGames);
router.get('/:gameId', gamesControllers.getGame);
router.put(
  '/:gameId',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  gamesControllers.editGame,
);
module.exports = router;

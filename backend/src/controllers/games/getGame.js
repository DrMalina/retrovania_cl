const Game = require('../../models/Game');

async function getGame(req, res, next) {
  try {
    const gameData = await Game.findById(req.params.gameId);
    res.status(200).send({ gameData });
  } catch (error) {
    next(error);
  }
}

module.exports = getGame;

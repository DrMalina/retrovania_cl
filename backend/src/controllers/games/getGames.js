const { isInt } = require('validator');

const Game = require('../../models/Game');

async function getGames(req, res, next) {
  try {
    const { limit = '15', page = '1' } = req.query;

    if (isInt(limit, { min: 1 }) && isInt(page, { min: 1 })) {
      const games = await Game.paginate({}, { limit: +limit, page: +page });
      return res.status(200).json(games);
    }

    return res.status(400).send('Invalid query parameters.');
  } catch (err) {
    next(err);
  }
}

module.exports = getGames;

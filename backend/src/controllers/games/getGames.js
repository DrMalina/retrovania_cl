const { isInt } = require('validator');

const Game = require('models/Game');

function convertQueryToRegex(query) {
  // only accept LETTERS, NUMBERS, SPACES
  if (!query.match(/^[A-Za-z0-9 ]*$/g)) return null;
  return new RegExp(`${query.split(' ').join('|')}`, 'gi');
}

async function getGames(req, res, next) {
  try {
    const { limit = '15', page = '1', query = '' } = req.query;
    const convertedQuery = convertQueryToRegex(query);
    const totalNumGames = await Game.find({ name: convertedQuery }).countDocuments();

    if (
      isInt(limit, { min: 1 }) &&
      isInt(page, { min: 1, max: Math.ceil(totalNumGames / limit) })
    ) {
      const games = await Game.paginate({ name: convertedQuery }, { limit: +limit, page: +page });
      return res.status(200).json(games);
    }

    return res.status(400).send('Invalid query parameters.');
  } catch (err) {
    next(err);
  }
}

module.exports = getGames;

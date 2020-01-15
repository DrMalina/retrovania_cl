const { isInt } = require('validator');

const Game = require('models/Game');

const getGenres = require('./getGenres');

function convertSearchQueryToRegex(query) {
  // only accept LETTERS, NUMBERS, SPACES
  if (!query.match(/^[A-Za-z0-9 ]*$/g)) return null;
  return new RegExp(`${query.split(' ').join('|')}`, 'gi');
}

function convertGenresQueryToRegex(genres) {
  if (!genres) return { $elemMatch: { $exists: true } };
  return new RegExp(`${genres.split(',').join('|')}`, 'gi');
}

async function getGames(req, res, next) {
  try {
    const { limit = '15', page = '1', query = '', genres = '', onlyGenres = false } = req.query;

    if (onlyGenres) {
      const genresList = await getGenres(next);
      return res.status(200).json(genresList); // only return list of genres
    }

    const convertedSearchQuery = convertSearchQueryToRegex(query);
    const convertedGenresQuery = convertGenresQueryToRegex(genres);
    const totalNumGames = await Game.find({
      name: convertedSearchQuery,
      genres: convertedGenresQuery,
    }).countDocuments();

    if (
      isInt(limit, { min: 1 }) &&
      isInt(page, { min: 1, max: Math.ceil(totalNumGames / limit) })
    ) {
      const games = await Game.paginate(
        { name: convertedSearchQuery, genres: convertedGenresQuery },
        { limit: +limit, page: +page },
      );
      return res.status(200).json(games);
    }

    return res.status(400).send('Invalid query parameters.');
  } catch (err) {
    next(err);
  }
}

module.exports = getGames;

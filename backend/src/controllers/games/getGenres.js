const Genre = require('models/Genre');

async function getGenres(next) {
  try {
    const genres = await Genre.find();
    const genresNamesArray = genres.map(el => el.name);
    return genresNamesArray;
  } catch (error) {
    next(error);
  }
}

module.exports = getGenres;

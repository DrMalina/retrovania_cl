const db = require('../database/database');
const Game = require('../models/Game');
const getCovers = require('./getCovers');
const apiClient = require('./apiClient');
const Genre = require('../models/Genre');

const seedGames = () => {
  apiClient(
    'games',
    'fields cover,first_release_date,genres,name,rating,storyline,summary; where release_dates.date < 631152000 & cover != null; limit 150;',
  )
    .then(async response => {
      const gameIds = response.data.map(game => `${game.id}`);
      const genres = await Genre.find();
      response.data.forEach(async game => {
        const newGenres = game.genres.map(genreId => {
          const foundGenre = genres.find(genre => genre.igdbId === genreId).name;
          return foundGenre;
        });

        const gameCovers = await getCovers(gameIds);

        const gameCover = gameCovers.find(cover => cover.id === game.id);
        await Game.create({
          name: game.name,
          cover: gameCover ? gameCover.url : null,
          genres: newGenres,
          rating: game.rating,
          summary: game.summary,
          firstReleaseDate: game.first_release_date,
        });
      });
    })
    .catch(err => {
      console.error(err);
    });
};

seedGames();

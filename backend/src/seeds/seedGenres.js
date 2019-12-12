const Genre = require('models/Genre');

const apiClient = require('./apiClient');

require('database/database');

const seedGenres = () => {
  apiClient('genres', 'fields name; limit 150;')
    .then(response => {
      return response.data.map(async ({ id, name }) => {
        await Genre.create({
          igdbId: id,
          name,
        });
      });
    })
    .catch(err => {
      console.error(err);
    });
};

seedGenres();

const apiClient = require('./apiClient');

module.exports = gameIds => {
  return apiClient('covers', `fields url; where game = (${gameIds}); limit 150;`)
    .then(response => response.data)
    .catch(err => {
      console.error(err);
    });
};

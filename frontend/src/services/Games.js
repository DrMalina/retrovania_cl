import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/api/games'
});

export default {
  fetchById(id) {
    return instance.get(`/${id}`).then(response => response.data);
  },
  fetchMany(page, limit, query) {
    return instance
      .get('/', {
        params: {
          limit,
          page,
          query
        }
      })
      .then(response => response.data);
  },
  updateGame(game) {
    const token = JSON.parse(localStorage.getItem('token'));
    return instance
      .put(`/${game._id}`, game, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.data);
  }
};

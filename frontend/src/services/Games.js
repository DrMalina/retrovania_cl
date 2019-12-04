import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/api/games'
});

export default {
  fetchById(id) {
    return instance.get(`/${id}`).then(response => response.data);
  },
  fetch(page, limit) {
    return axios
      .get('http://localhost:3030/api/games', {
        params: {
          limit,
          page
        }
      })
      .then(response => response.data);
  }
};

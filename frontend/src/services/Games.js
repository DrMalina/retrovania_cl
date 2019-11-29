import axios from 'axios';

export default {
  fetch(limit) {
    return axios
      .get('http://localhost:3030/api/games', {
        params: {
          limit
        }
      })
      .then(response => {
        return response.data;
      });
  }
};

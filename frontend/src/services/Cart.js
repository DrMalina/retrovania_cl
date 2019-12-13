import axios from 'axios';

export default {
  fetch() {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios
      .get('http://localhost:3030/api/cart', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.data.cart);
  }
};

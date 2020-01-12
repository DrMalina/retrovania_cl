import axios from 'axios';
import { store } from 'redux/store';

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
  },

  persist() {
    const token = JSON.parse(localStorage.getItem('token'));
    const state = store.getState();
    const { current: cart } = state.cart;
    return axios
      .post('http://localhost:3030/api/cart', {
        cart,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.data.cart);
  }
};

import axios from 'axios';

export default {
  authenticate(route, formValues) {
    return axios.post(`http://localhost:3030/api/users/${route}`, formValues);
  },

  deauthenticate() {
    return axios.post('http://localhost:3030/api/users/signout');
  }
};

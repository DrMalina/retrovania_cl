import axios from 'axios';

export default {
  authenticate(route, formValues) {
    return axios.post(`http://localhost:3030/api/users/${route}`, formValues);
  },

  deauthenticate() {
    return axios.post('http://localhost:3030/api/users/signout');
  },

  reauthorize(token) {
    return axios.post('http://localhost:3030/api/users/reauthorize', {
      // nothing :- )
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};

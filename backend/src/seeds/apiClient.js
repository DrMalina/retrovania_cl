const axios = require('axios');

module.exports = function apiClient(resourceName, data, method = 'POST') {
  return axios({
    url: `https://api-v3.igdb.com/${resourceName}`,
    headers: {
      Accept: 'application/json',
      'user-key': '',
    },
    data,
    method,
  });
};

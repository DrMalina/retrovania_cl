import axios from 'axios';

export default {
  fetch(limit) {
    // return axios.get('/api/games', {
    //   params: {
    //     limit,
    //   },
    // });

    const exampleDescription =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    return Promise.resolve([
      {
        title: 'Super Mario Bros',
        year: 1985,
        company: 'Nintendo',
        description: exampleDescription
      },
      {
        title: 'Contra',
        year: 1988,
        company: 'Konami',
        description: exampleDescription
      },
      {
        title: 'Battle City',
        year: 1985,
        company: 'Namco',
        description: exampleDescription
      }
    ]);
  }
};

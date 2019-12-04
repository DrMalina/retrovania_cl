import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/api/games'
});

export default {
  fetchById(id) {
    // return instance.get(`/${id}`).then(response => response.data);
    return new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            _id: id,
            genres: ['Adventure', 'Arcade'],
            name: "Dragon's Lair: Escape from Singe's Castle",
            cover: null,
            summary:
              "The adventure continues… \n \nThe evil Shapeshifter has stolen Princess Daphne and to save her you will have to outwit the Evil One in totally new encounters never before seen in the original Dragon's Lair. New scenarios and characters combine to make Escape from Singe's Castle the best sequel to the largest selling animated adventure of all time… Dragon's Lair. \n \nMuster all your skill and cunning to free Daphne from deep within the labyrinthian dungeons of Singes Castle. \n \nLead on brave adventurer, your quest awaits!",
            firstReleaseDate: '567907200'
          }),
        3000
      )
    );
  },

  fetchMany(limit) {
    return instance
      .get('/', {
        params: {
          limit
        }
      })
      .then(response => response.data);
  }
};

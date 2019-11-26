const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  cover: String,
  firstReleaseDate: Number,
  genres: [String],
  name: String,
  rate: Number,
  summary: String,
});
const Game = mongoose.model('game', schema);
module.exports = Game;

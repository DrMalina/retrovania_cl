const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const schema = new mongoose.Schema({
  cover: String,
  firstReleaseDate: Number,
  genres: [String],
  name: String,
  rate: Number,
  summary: String,
});

schema.plugin(paginate);

const Game = mongoose.model('game', schema);

module.exports = Game;

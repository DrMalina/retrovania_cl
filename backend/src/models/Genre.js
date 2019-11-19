const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  igdbId: Number,
});
const Genre = mongoose.model('genre', schema);
module.exports = Genre;

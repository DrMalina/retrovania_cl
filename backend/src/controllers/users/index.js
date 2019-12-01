const fetchCurrent = require('./fetchCurrent');
const reauthorize = require('./reauthorize');
const deleteCurrent = require('./deleteCurrent');
const signIn = require('./signIn');
const signOut = require('./signOut');
const signUp = require('./signUp');
const updateCurrent = require('./updateCurrent');

module.exports = {
  deleteCurrent,
  fetchCurrent,
  reauthorize,
  signIn,
  signOut,
  signUp,
  updateCurrent,
};

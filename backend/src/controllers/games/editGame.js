const Game = require('../../models/Game');

async function editGame(req, res, next) {
  try {
    Game.findByIdAndUpdate(req.params.gameId, { $set: req.body }, function(err) {
      if (err) {
        res.status(500).send(err);
      }
      res.send('OK');
    });
  } catch (err) {
    next(err);
  }
}

module.exports = editGame;

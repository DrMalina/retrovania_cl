const Game = require('models/Game');

async function editGame(req, res, next) {
  try {
    await Game.updateOne({ _id: req.params.gameId }, { $set: req.body });
    const game = await Game.findById(req.params.gameId);
    res.status(200).send(game);
  } catch (err) {
    res.status(500).send(err);
    next(err);
  }
}

module.exports = editGame;

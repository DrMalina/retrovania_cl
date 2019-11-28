const Game = require('../../models/Game');

const getGames = async (req, res) => {
  try {
    const totalCount = await Game.countDocuments();
    const limit = Number(req.query.limit) || totalCount;
    const games = await Game.find({}).limit(limit);

    res.status(200).json({
      totalCount,
      games,
    });
  } catch (error) {
    res.status(500).send('Internal server error');
  }
};

module.exports = getGames;

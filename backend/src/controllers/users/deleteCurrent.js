const User = require('../../models/User');

async function deleteCurrent(req, res, next) {
  try {
    const { user } = req;
    await User.deleteOne(user);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = deleteCurrent;

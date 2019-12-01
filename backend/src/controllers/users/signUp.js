const User = require('../../models/User');

async function signUp(req, res, next) {
  try {
    const user = await User.create(req.body);
    const token = user.getToken();
    res.status(201).send({ token, user });
  } catch (err) {
    next(err);
  }
}

module.exports = signUp;

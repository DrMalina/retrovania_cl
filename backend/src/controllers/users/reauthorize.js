async function reauthorize(req, res, next) {
  try {
    const { user } = req;
    const token = user.getToken();
    res.status(200).send({ token, user });
  } catch (err) {
    next(err);
  }
}

module.exports = reauthorize;

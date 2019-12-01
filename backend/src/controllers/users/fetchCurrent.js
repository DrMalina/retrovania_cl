async function fetchCurrent(req, res, next) {
  try {
    const { user } = req;
    res.status(200).send({ user });
  } catch (err) {
    next(err);
  }
}

module.exports = fetchCurrent;

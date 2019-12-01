async function signOut(req, res, next) {
  try {
    res.status(200).send();
  } catch (err) {
    next(err);
  }
}

module.exports = signOut;

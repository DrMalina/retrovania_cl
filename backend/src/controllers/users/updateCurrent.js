async function updateCurrent(req, res, next) {
  try {
    const {
      body: { email },
      user,
    } = req;
    if (user.email !== email) user.email = email;
    await user.save();
    res.status(200).send({ user });
  } catch (err) {
    next(err);
  }
}

module.exports = updateCurrent;

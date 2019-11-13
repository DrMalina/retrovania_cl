const bcrypt = require('bcrypt');
const { User, validate } = require('../../models/user');

const signUp = async (req, res, next) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).send('Such user already exists!');
    }
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    res.send(user);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
};

module.exports = signUp;

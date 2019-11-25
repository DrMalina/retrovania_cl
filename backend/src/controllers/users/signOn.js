const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const { User } = require('../../models/user');

const validateUser = user => {
  const schema = Joi.object({
    name: Joi.string()
      .min(5)
      .max(100),
    email: Joi.string()
      .min(5)
      .max(255)
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
  }).oxor('name', 'email');
  return schema.validate(user);
};

const signOn = async (req, res, next) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).send(error);
    }
    const user =
      (await User.findOne({ email: req.body.email })) ||
      (await User.findOne({ name: req.body.name }));
    if (!user) {
      return res.status(400).send('Incorrect User or password');
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).send('Incorrect User or password');
    }

    res.send(true);
  } catch (error) {
    next(error);
  }
};

module.exports = signOn;

const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 1024,
    },
  }),
);

// FUNCTION FOR VALIDATING REQUEST

const validateUser = user => {
  const schema = Joi.object({
    name: Joi.string()
      .min(5)
      .max(100)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
  });
  return schema.validate(user);
};

exports.User = User;
exports.validate = validateUser;

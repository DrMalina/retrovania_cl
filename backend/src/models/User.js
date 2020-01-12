const { compare, genSalt, hash } = require('bcryptjs');
const { isEmail } = require('validator');
const { sign } = require('jsonwebtoken');
const mongoose = require('mongoose');

const config = require('config/config');

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
      unique: true,
      validate(email) {
        if (!isEmail(email)) {
          throw new Error('Invalid format: "email." Expected format: email.');
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(password) {
        const passwordLengthIsLessThan8 = password.toString().length < 8;

        if (passwordLengthIsLessThan8) {
          throw new Error('Invalid length: "password." Expected length: min. 8 characters.');
        }

        const passwordContainsPassword = password
          .toString()
          .toLowerCase()
          .includes('password');

        if (passwordContainsPassword) {
          throw new Error('Invalud value: "password." Cannot contain "password."');
        }
      },
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin'],
    },
  },
  {
    timestamps: true,
  },
);

schema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    const saltRounds = 8;
    const salt = await genSalt(saltRounds);
    user.password = await hash(user.password, salt);
  }
  next();
});

schema.methods.getToken = function getToken() {
  const user = this;
  const pload = { sub: user.id.toString() };
  const secret = config.JSONWEBTOKEN_SECRET;
  const options = { expiresIn: 30 * 24 * 60 * 60 * 1000 };
  const token = sign(pload, secret, options);
  return token;
};

schema.methods.toJSON = function toJSON() {
  const user = this;
  const safeUser = user.toObject();
  delete safeUser.password;
  return safeUser;
};

schema.methods.validatePassword = async function validatePassword(password) {
  const user = this;
  const isMatch = await compare(password, user.password);
  return isMatch;
};

schema.virtual('cart', {
  ref: 'Cart',
  foreignField: 'userId',
  localField: '_id',
});

const User = mongoose.model('user', schema);

module.exports = User;

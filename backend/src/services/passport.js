const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const config = require('../config/config');
const User = require('../models/User');

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.JSONWEBTOKEN_SECRET,
    },
    async (pload, done) => {
      try {
        const user = await User.findOne({ _id: pload.sub });
        if (!user) {
          return done(null, false, { message: 'User not found.' });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: 'User not found.' });
        }
        const isMatch = await user.validatePassword(password);
        if (!isMatch) {
          return done(null, false, { message: 'Invalid password.' });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

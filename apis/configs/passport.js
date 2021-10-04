const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local').Strategy
const {ExtractJwt} = require('passport-jwt')
const User = require('../models/user.model')
const {JWT_SECRET} = require('./index')


passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
  secretOrKey: JWT_SECRET
}, async function (payload, done) {
  try {
    const user = await User.findById(payload.sub)
    if (!user) {
      return done(null, false)
    } else {
      return done(null, user)
    }
  } catch (error) {
    return done(error, false)
  }
}))

// passport local
passport.use(new LocalStrategy({
  usernameField: 'email',
}, async function (email, password, done) {
  try {
    const user = await User.findOne({email})
    if (!user) {
      return done(null, false)
    }
    const isCorrectPassword = await user.isValidPassword(password)
    if (!isCorrectPassword) {
      return done(null, false)
    }
    return done(null, user)
  } catch (error) {
    done(error, false)
  }
}))

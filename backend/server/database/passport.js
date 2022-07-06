const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/User');
const { validatePassword } = require('./passwordUtils');

const verifyCallback = async (email, password, done) => {
    await User.findOne({
      raw: true,
      where:{
        email : email
      }})
        .then((user) => {
            if(user === null) { return done(null, false)}

            const isValid = validatePassword(password, user.hash, user.salt);
            if(isValid){
                return done(null, user)
            }
            else{
                return done(null, false)
            }
        }).catch((err) => {
            done(err);
        })
}

passport.use(new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
  verifyCallback
));

passport.serializeUser(function(user, done) {
    process.nextTick(function() {
      done(null, { id: user.id, email: user.email });
    });
  });

  passport.deserializeUser(async function(user, done) {
    process.nextTick(async () => {
      await User.findOne({
        raw: true,
        where:{
          id: user.id
        }
      })
        .then((user) => {
            done(null, user)
        })
        .catch(err => done(err))
    });
  });
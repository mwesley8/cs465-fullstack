const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Cause new Local Strategy Not a constructor
//const { LocalStrategy } = require('passport-local');
const mongoose = require('mongoose');
const Schema = require('../models/db');

const User = mongoose.model('users');

passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    (username, password, done) => {
        console.log(username);
        console.log(password);
        User.findOne({ email: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done){
    done(null, user.id)
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

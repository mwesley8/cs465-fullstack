const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const Schema = require('../models/db');

const User = mongoose.model('users');

passport.use(new LocalStrategy({
    //username: 'name',
    usernameField: 'email',
    //passwordField: 'password',
    //passReqToCallback: true
    }, //User.authenticate(),
    (username, password, done) => {
        User.findOne({ email: username}, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            // Commented out because of Salt Error in Code
            //if (!user.validPassword(password)) {
            //    return done(null, false, {
            //        message: 'Incorrect password.'
            //    });
            //}
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

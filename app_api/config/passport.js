// Import libraries, modules, schema, and collection
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const Schema = require('../models/db');

const User = mongoose.model('users');

// Local Strategy logic to handle expression session authentication
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

// Serializer for express session middleware
passport.serializeUser(function(user, done){
    done(null, user.id)
});

// Deserializer for express session middleware
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

// Import libraries, modules, schema, and collection
const passport = require('passport');
const mongoose = require('mongoose');
const Schema = require('../models/db');
const { response } = require('../../app');

const User = mongoose.model('users');

// Logic to handle register request
const register = (req, res) => {
    // Output to user for testing
    console.log(req.body.name);

    // Conditional statement to check if all fields contian values
    if (!req.body.email || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({"message": "All fields required"});
    }
    
    // Object instantiation to hold field values 
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    // Mongo user schema instance internal function call to post new user
    user.save((err) => {
    //User.register(new User({ email: req.body.email, username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            const token = user.generateJwt();
            res
                .status(200)
                .json({token})
                //.redirect('/login');
        }
    })
};
// Logic to handle login field information
const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        // Output to user during test
        console.log(req.body.email);
        return res
            .status(400)
            .json({"message": "All fields required"});
    }
    // Internal local strategy passport method to authenticate user
    passport.authenticate('local', {session: false}, (err, user, info) => {
        // Error handling
        if (err) {
            return res
                .status(404)
                .json(err);
        }
        // Condition when a valid user is returned
        if (user) {
            // Create JWT bearer token
            const token = user.generateJwt();
            
            res
                .status(200)
                .json({token});
        } else {
            res
                .status(401)
                .json(info);
        }
    })(req, res);
};
// Export login and register logic
module.exports = {
    register,
    login
};
const passport = require('passport');
const mongoose = require('mongoose');
const Schema = require('../models/db');
const { response } = require('../../app');

const User = mongoose.model('users');

const register = (req, res) => {
    
    console.log(req.body.name);

    if (!req.body.email || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({"message": "All fields required"});
    }
    
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    
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

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        console.log(req.body.email);
        return res
            .status(400)
            .json({"message": "All fields required"});
    }
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err) {
            return res
                .status(404)
                .json(err);
        }
        if (user) {
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

module.exports = {
    register,
    login
};
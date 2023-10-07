const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
//const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});
userSchema.methods.setPassword = function(password){
    // Will use the Crypto API to generate a random set of bytes
    // that will be used as a salt. 
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt,
        1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, 'sha512').toString('hex');
    // This will generate the web token
    return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000, 10),
}, "NewHampsh!reCollege0fAccounting@Commerce"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};
// New from Geeks For Geeks: Does not change or effect the program
//userSchema.plugin(passportLocalMongoose);

mongoose.model('users', userSchema);
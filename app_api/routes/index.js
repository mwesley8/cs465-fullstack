// Import libraries and modules
var express = require('express');
var router = express.Router();
// Causes the program to crash: jwt is not a function
const jwt = require('express-jwt');

// Updated method to call express-jwt
const { expressjwt: expressJwt } = require('express-jwt');

// Add algorithms options: error will display that it is required
const auth = expressJwt({
    secret: process.env.GHETTO_SECRET,
    algorithms: ['HS256'],
    userProperty: 'payload'
});

const ctrAuth = require('../controllers/authentication');
// Import/use the trips file located in the controllers folder
const ctrTrip = require('../controllers/trips');
const passport = require('passport');
const { reset } = require('nodemon');

router
    .route('/login')
    .post(ctrAuth.login);

router
    .route('/register')
    .post(ctrAuth.register);

/* Page and Info. */
router
    // Example: https://127.0.0.1:3000/api/trips
    .route('/trips')
    // Retrieve the trips list from the tips.js database request
    .get(ctrTrip.tripsList)
    .post(auth, ctrTrip.tripsAddTrip);

/* Page and Info. */
router
    // Example: https://127.0.0.1:3000/api/trips
    .route('/trips/:tripCode')
    // Retrieve the trip from the tips.js database request
    .get(ctrTrip.tripsFindByCode)
    // PUT the updated information in the database
    .put(auth, ctrTrip.tripsUpdateTrip);





// Export Router
module.exports = router;

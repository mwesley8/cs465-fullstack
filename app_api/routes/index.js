var express = require('express');

var router = express.Router();

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
    .post(ctrTrip.tripsAddTrip);

/* Page and Info. */
router
    // Example: https://127.0.0.1:3000/api/trips
    .route('/trips/:tripCode')
    // Retrieve the trip from the tips.js database request
    .get(ctrTrip.tripsFindByCode)
    .put(ctrTrip.tripsUpdateTrip);





// Export Router
module.exports = router;

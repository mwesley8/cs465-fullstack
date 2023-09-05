var express = require('express');

var router = express.Router();
// Import/use the trips file located in the controllers folder
const ctrTrip = require('../controllers/trips');

/* Page and Info. */
router
    // Example: https://127.0.0.1:3000/api/trips
    .route('/trips')
    // Retrieve the trips list from the tips.js database request
    .get(ctrTrip.tripsList);

/* Page and Info. */

router
    // Example: https://127.0.0.1:3000/api/trips
    .route('/trips/:tripCode')
    // Retrieve the trip from the tips.js database request
    .get(ctrTrip.tripsFindByCode);

// Export Router
module.exports = router;

var express = require('express');
var router = express.Router();
// Import the controllers module main.js
const ctrMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrMain.index);

module.exports = router;

// Object instance of the built in Node file system
var fs = require('fs');

// Parse the newly created JSON file with resusable static content
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));


/* Get travel view */
// Pass the parsed information to the view
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips});
};

module.exports = {
    travel
};

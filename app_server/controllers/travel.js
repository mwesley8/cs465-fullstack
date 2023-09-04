// Object instance of the built in Node file system
var fs = require('fs');

// Parse the newly created JSON file with resusable static content
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));


/* Get travel view */
// Pass the parsed information to the view
const travel = (req, res) => {
    // Looks at the node process that is running and the environmental
    // variables in it. 
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', { title: pageTitle, trips});
};

module.exports = {
    travel
};

// Before the changes, the current view is still getting information from static content
// Now we are going to add an API endpoint to retrieve information from a database


// Object instance of the built in Node file system
//var fs = require('fs');

// Parse the newly created JSON file with resusable static content
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const request = require('request');
const apiOptions = {
    server: 'http://127.0.0.1:3000'
};

/*Get Travel List View*/
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: '${apiOptions.server}${path}',
        method: 'GET',
        joson: {},
    };
    console.info('>> travelController.travelList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    );
};

/* internal method to render the travel list */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    }
    else {
        if (!responseBody.length) {
            message = 'No trips exist in our database';
        }
    }
    res.render('travel',
        {
            title: pageTitle,
            trips: responseBody,
            message
        }
    );
}

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

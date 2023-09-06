// Before the changes, the current view is still getting information from static content
// Now we are going to add an API endpoint to retrieve information from a database


// Object instance of the built in Node file system
//var fs = require('fs');

// Parse the newly created JSON file with resusable static content
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

/* internal method to render the travel list */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if (!(responseBody instanceof Array)) {
        // If the message is not an array
        message = 'API lookup error';
        responseBody = [];
    }
    else {
        // Received an array but it is empty
        if (!responseBody.length) {
            message = 'No trips exist in our database';
        }
    }

    //var tripInfo = JSON.parse(responseBody);
    
    res.render('travel',
        {
            // Passing the response body from the API
            title: pageTitle,
            // Change trips from the system file
            // Pass the response body from the API
            //trips: responseBody,
            trips: responseBody,
            message
        }
    );
};

/*Get Travel List View*/
const travelList = (req, res) => {
    // Points to the proper location
    const path = '/api/trips';
    // Build up some options
    // HTTP parts
    const requestOptions = {
        // Listed with back ticks: apiOptions from above and the path from line 19
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    // Emit on the console the moment the script makes a GET request
    console.info('>> travelController.travelList calling ' + requestOptions.url);

    // Using a request object
    request(
        // Pass in the options
        requestOptions,
        // Call back
        (err, {statusCode},body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    );
};



/* Get travel view */
// Pass the parsed information to the view
const travel = (req, res) => {
    // Looks at the node process that is running and the environmental
    // variables in it. 
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', { title: pageTitle, trips});
};

module.exports = {
    travelList
};

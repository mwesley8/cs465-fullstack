// Import the mongoose
const mongoose = require('mongoose'); //.set('debug', true),
// Needed for the database connection -- Schema
const Schema  = require("../models/db")
// Instantiate a database instance to perform queries
const Model    = mongoose.model('trips');


// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    Model
        .find({})   // empty filter for all. Simple MongoDB find
        // The API Call back
        .exec((err, trips) => {
            // If the trips is null
            if (!trips) {
                // return a response
                return res
                    // The API is returning JSON data
                    .status(404)
                    .json({ "message": "trips not found" });
            }
            else if (err) {
                // Display Error
                return res 
                    .status(404)
                    .json(err);
            }
            else {
                // When trips is returned
                return res 
                    .status(200)
                    .json(trips);
            }
        });
};

const tripsAddTrip = async (req, res) => {
    Model
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) => {
            if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            else {
                return res
                    .status(201)
                    .json(trip);
            }
        });
}
const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    Model
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
}

// GET: /trips/tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
    Model
        // Pass key/value pair in MongDb statement
        .find({ 'code': req.params.tripCode})
        // Get call to API
        .exec((err, trip) => {
            if (!trip) {
                // When the return data is empty
                return res
                    // Output to user
                    .status(404)
                    .json({ "message": "trips not found" });
            }
            else if (err) {
                // When the API returns an error
                return res
                    // Output to user
                    .status(404)
                    .json(err);
            }
            else {
                // When the API detect a valid response
                return res
                    // Output to user
                    // Return data from API in json format
                    .status(200)
                    .json(trip);
            }
        });
};
// Exports values from API requests to function call
module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
}
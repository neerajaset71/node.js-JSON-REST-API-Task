var express = require('express');

// Get the router
var router = express.Router();

var airports = require('../controllers/airports');

// Middleware for all this routers requests
router.use(function timeLog(req, res, next) {
    console.log('Request Received: ', dateDisplayed(Date.now()));
    next();
});

// Welcome message for a GET at http://localhost:3000
router.get('/', function (req, res) {
    res.json({ message: 'Welcome to the REST JSON API' });
});

//Retrieve all airports from master data JSON API (using a GET at http://localhost:3000/airports)
router.route('/airports').get(airports.all);

//Retrieve all domestic airports by matching property regional_airport as true (using a GET at http://localhost:3000/airports/domestic)
router.route('/airports/domestic').get(airports.byDomesticType);//Retrieve all domestic airports

//Retrieve all international airports by matching property international_airport as true (using a GET at http://localhost:3000/airports/international)
router.route('/airports/international').get(airports.byInternationalType);

//Retrieve a single airport by matching airport code equals code keyword (case-insensitive) (using a GET at http://localhost:3000/airports/airportcode/:airportcode)
router.route('/airports/airportcode/:airportcode').get(airports.byAirportCode);

//Retrieve all airports by matching airport name contains name keyword (case-insensitive) (using a GET at http://localhost:3000/airports/airportname/:airportname)
router.route('/airports/airportname/:airportname').get(airports.byAirportName);

//Retrieve all airports by matching country code equals code keyword (case-insensitive) (using a GET at http://localhost:3000/airports/countrycode/:countrycode)
router.route('/airports/countrycode/:countrycode').get(airports.byCountryCode);

//Retrieve all airports by matching country name contains name keyword (case-insensitive) (using a GET at http://localhost:3000/airports/countryname/:countryname)
router.route('/airports/countryname/:countryname').get(airports.byCountryName);

//Retrieve all airports by matching either airport name or country name contains name keyword (case-insensitive) (using a GET at http://localhost:3000/airports/displayname/:displayname)
router.route('/airports/displayname/:displayname').get(airports.byDisplayName);

module.exports = router;

//Create a timestamp
function dateDisplayed(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}
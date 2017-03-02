var request = require('request');
var _ = require("underscore");

var airportCollection = [];

//Consume the provided external JSON API for master data
var options = {
  method: 'GET',
  url: 'https://www.qantas.com.au/api/airports',
  headers:
  {
    'cache-control': 'no-cache'
  }
};

request(options, function (err, res, data) {
  if (err) {
    console.log('Error:', err);
  } else if (res.statusCode !== 200) {
    console.log('Status:', res.statusCode);
  } else {
    airportCollection = JSON.parse(data);
  }
});

//Retrieve all airports (using a GET at http://localhost:3000/airports)
exports.all = function (req, res) {
  var filtered = airportCollection.airports;
  if (filtered !== null && filtered.length && filtered.length > 0)
    res.json(filtered);
  else
    res.json({ message: 'No data found' });
}

//Retrieve all domestic airports (using a GET at http://localhost:3000/airports/domestic)
exports.byDomesticType = function (req, res) {
  var filtered = _.where(airportCollection.airports, { regional_airport: true });
  if (filtered !== null && filtered.length && filtered.length > 0)
    res.json(filtered);
  else
    res.json({ message: 'No data found' });
}

//Retrieve all international airports (using a GET at http://localhost:3000/airports/international)
exports.byInternationalType = function (req, res) {
  var filtered = _.where(airportCollection.airports, { international_airport: true });
  if (filtered !== null && filtered.length && filtered.length > 0)
    res.json(filtered);
  else
    res.json({ message: 'No data found' });
}

//Retrieve a single airport by matching airport code (case-insensitive) (using a GET at http://localhost:3000/airports/airportcode/:airportcode)
exports.byAirportCode = function (req, res) {
  var airportCode = decodeURI(req.params.airportcode).toUpperCase();
  var filtered = _.where(airportCollection.airports, { code: airportCode });
  if (filtered !== null && filtered.length && filtered.length > 0)
    res.json(filtered);
  else
    res.json({ message: 'No matched data found' });
}

//Retrieve all airports by matching airport name contains keyword (case-insensitive) (using a GET at http://localhost:3000/airports/airportname/:airportname)
exports.byAirportName = function (req, res) {
  var airportName = decodeURI(req.params.airportname).toUpperCase();
  var filtered = _.filter(airportCollection.airports, function (i) { return i.display_name.toUpperCase().search(airportName) != -1 });
  if (filtered !== null && filtered.length && filtered.length > 0)
    res.json(filtered);
  else
    res.json({ message: 'No matched data found' });
}

//Retrieve all airports by matching country code contains code (case-insensitive) (using a GET at http://localhost:3000/airports/countrycode/:countrycode)
exports.byCountryCode = function (req, res) {
  var countryCode = decodeURI(req.params.countrycode).toUpperCase();
  var filtered = _.filter(airportCollection.airports, function (i) { return i.country.code == countryCode; });
  if (filtered !== null && filtered.length && filtered.length > 0)
    res.json(filtered);
  else
    res.json({ message: 'No matched data found' });
}

//Retrieve all airports by matching country name contains keyword (case-insensitive) (using a GET at http://localhost:3000/airports/countryname/:countryname)
exports.byCountryName = function (req, res) {
  var countryName = decodeURI(req.params.countryname).toUpperCase();
  var filtered = _.filter(airportCollection.airports, function (i) { return i.country.display_name.toUpperCase().search(countryName) != -1 });
  if (filtered !== null && filtered.length && filtered.length > 0)
    res.json(filtered);
  else
    res.json({ message: 'No matched data found' });
}

//Retrieve all airports by matching either airport name or country name contains keyword (case-insensitive) (using a GET at http://localhost:3000/airports/displayname/:displayname)
exports.byDisplayName = function (req, res) {
  var displayName = decodeURI(req.params.displayname).toUpperCase();
  var filtered = _.filter(airportCollection.airports, function (i) { return (i.display_name.toUpperCase().search(displayName) != -1 || i.country.display_name.toUpperCase().search(displayName) != -1) });
  if (filtered !== null && filtered.length && filtered.length > 0)
    res.json(filtered);
  else
    res.json({ message: 'No matched data found' });
}
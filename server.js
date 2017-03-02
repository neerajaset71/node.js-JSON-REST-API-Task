var express = require('express');
var app = express();

var routes = require('./routes/routes');//all api routes go in ./routes/routes.js file

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);// Set port
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || 'localhost');// Set ip address

// init api route.
// All routes are relative to '/'
app.use('/', routes);

// Error 404 Handler
app.use(function (req, res) {
    res.status(404);
    res.json({ message: '404: File Not Found' });
});

// Error 500 Handler
app.use(function (err, req, res, next) {
    res.status(500);
    res.json({ err: '500: Internal Server Error' });
});

// Start express server listening on port
app.listen(app.get('port'), app.get('ipaddr'));

console.log('Express server listening on  IP: ' + app.get('ipaddr') + ' and port ' + app.get('port'));
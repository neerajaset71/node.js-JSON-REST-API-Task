var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:3000");

// UNIT test begin
describe("REST API Unit tests", function () {

    // #1 using a GET at http://localhost:3000
    it("TEST 1: should return welcome message for a GET at http://localhost:3000", function (done) {
        server
            .get("/")
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.error.should.equal(false);
                done();
            });
    });

    // #2 using a GET at http://localhost:3000/airports
    it("TEST 2: should retrieve all airports from master data JSON API (using a GET at http://localhost:3000/airports)", function (done) {
        server
            .get("/airports")
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.error.should.equal(false);
                done();
            });
    });

    // #3 using a GET at http://localhost:3000/airports/domestic
    it("TEST 3: should retrieve all domestic airports by matching property regional_airport as true (using a GET at http://localhost:3000/airports/domestic)", function (done) {
        server
            .get("/airports/domestic")
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.error.should.equal(false);
                done();
            });
    });

    // #4 using a GET at http://localhost:3000/airports/international
    it("TEST 4: should retrieve all international airports by matching property international_airport as true (using a GET at http://localhost:3000/airports/international)", function (done) {
        server
            .get("/airports/international")
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.error.should.equal(false);
                done();
            });
    });

    // #5 using a GET at http://localhost:3000/airports/airportcode/syd
    it("TEST 5: should retrieve a single airport by matching airport code equals code keyword (case-insensitive) (using a GET at http://localhost:3000/airports/airportcode/:airportcode)", function (done) {
        server
            .get("/airports/airportcode/syd")
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.error.should.equal(false);
                done();
            });
    });

    // #6 using a GET at http://localhost:3000/airports/airportname/del
    it("TEST 6: should retrieve all airports by matching airport name contains name keyword (case-insensitive) (using a GET at http://localhost:3000/airports/airportname/:airportname)", function (done) {
        server
            .get("/airports/airportname/del")
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.error.should.equal(false);
                done();
            });
    });

    // #7 using a GET at http://localhost:3000/airports/countrycode/au
    it("TEST 7: should retrieve all airports by matching country code equals code keyword (case-insensitive) (using a GET at http://localhost:3000/airports/countrycode/:countrycode)", function (done) {
        server
            .get("/airports/countrycode/au")
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.error.should.equal(false);
                done();
            });
    });

    // #8 using a GET at http://localhost:3000/airports/countryname/aust
    it("TEST 8: should retrieve all airports by matching country name contains name keyword (case-insensitive) (using a GET at http://localhost:3000/airports/countryname/:countryname)", function (done) {
        server
            .get("/airports/countryname/aust")
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.error.should.equal(false);
                done();
            });
    });

    // #9 using a GET at http://localhost:3000/airports/displayname/arm
    it("TEST 9: should retrieve all airports by matching either airport name or country name contains name keyword (case-insensitive) (using a GET at http://localhost:3000/airports/displayname/:displayname)", function (done) {
        server
            .get("/airports/displayname/arm")
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.error.should.equal(false);
                done();
            });
    });

    // #10 404 for other router
    it("TEST 10: should return 404", function (done) {
        server
            .get("/random")
            .expect(404) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(404);
                done();
            });
    });
});
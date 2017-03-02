# node.js-JSON-REST-API-Task

REST API Backend Service with Node.js, Express

**Dependencies**

Requires "node.js" to be installed

**Steps**

1 : Install 'express'
npm install --save express

2 : Install 'request'
npm install --save request

3 : Install 'underscore'
npm install --save underscore

4 : Install 'mocha' as dev dependency
npm install --save-dev mocha

5 : Install 'should' as dev dependency
npm install --save-dev should

6 : Install 'supertest' as dev dependency
npm install --save-dev supertest

7 : Install all dependencies
npm install

**Once "node_modules" folder gets created using above steps, then run the below command to start the server**

node server.js

**After Server start, navigate to (few examples)**

http://localhost:3000 

http://localhost:3000/airports

http://localhost:3000/airports/airportcode/syd

http://localhost:3000/airports/airportname/Ade

http://localhost:3000/airports/countrycode/gb

http://localhost:3000/airports/countryname/GR

http://localhost:3000/airports/displayname/arm

**Any undefined url in routes will give 404 error**

**Automated Tests**
to run the automated test scripts, run the below command in new command prompt window while the server is running in another

npm test



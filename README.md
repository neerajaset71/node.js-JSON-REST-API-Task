# node.js-JSON-REST-API-Task

REST API Backend Service with Node.js, Express

Requires "node.js" to be installed.

Requires "express" to be installed using npm.

Requires "request" to be installed using npm.

Requires "underscore" to be installed using npm.


**Initial Steps**

npm install --save express

npm install --save request

npm install --save underscore

npm install

**Once "node_modules" folder gets created using above steps, then below command is needed to start the server**

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

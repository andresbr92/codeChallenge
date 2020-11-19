'use strict';
let app = require('connect')();
let http = require('http');
let path = require('path')
let swaggerTools = require('swagger-tools');

let serverPort = 3000;

// swaggerRouter configuration
let options = {
    controllers: path.join(__dirname, './controllers'),
    useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
let swaggerDoc = require('./api/swagger.json');

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Start the server
    http.createServer(app).listen(serverPort, function () {
        console.log(options)
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    });
});
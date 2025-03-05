//? 6.5

const httpStatus = require('http-status-codes'); // Import HTTP status codes for readability

// Content-Type for HTML responses
const htmlContentType = {
    "Content-Type": "text/html"
};

// Object to store route handlers for different HTTP methods
const routes = {
    "GET": { // Stores GET request handlers
        "/info": (req, res) => { // Defines a handler for GET requests to "/info"
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/plain"
            });
            res.end("Welcome to the Info Page!"); // Responds with a plain text message
        }
    },
    "POST": {} // Placeholder for POST request handlers
};

// Function to handle incoming HTTP requests
exports.handle = (req, res) => {
    try {
        if (routes[req.method] && routes[req.method][req.url]) {
            // If a matching route exists, call the corresponding handler
            routes[req.method][req.url](req, res);
        } else {
            // If no route is found, return a 404 error response
            res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
            res.end("<h1>No such file exists</h1>");
        }
    } catch (ex) {
        console.log("error: " + ex); // Log errors if something goes wrong
    }
};

// Function to register GET request handlers
exports.get = (url, action) => {
    routes["GET"][url] = action; // Adds a new route handler for GET requests
};

// Function to register POST request handlers
exports.post = (url, action) => {
    routes["POST"][url] = action; // Adds a new route handler for POST requests
};








// const httpStatus = require('http-status-codes');

// const htmlContentType = { "Content-Type": "text/html" };

// const routes = {
//     "GET": {},
//     "POST": {}
// };

// // Handles HTTP requests based on registered routes
// exports.handle = (req, res) => {
//     try {
//         if (routes[req.method] && routes[req.method][req.url]) {
//             routes[req.method][req.url](req, res);
//         } else {
//             res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
//             res.end("<h1>404 Not Found</h1>");
//         }
//     } catch (ex) {
//         console.log("error: " + ex);
//         res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, htmlContentType);
//         res.end("<h1>500 Internal Server Error</h1>");
//     }
// };

// // Register GET routes dynamically
// exports.get = (url, action) => {
//     routes["GET"][url] = action;
// };

// // Register POST routes dynamically
// exports.post = (url, action) => {
//     routes["POST"][url] = action;
// };

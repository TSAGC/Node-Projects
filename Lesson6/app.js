// const port = 3000;
// //* 6.2 - 6.3
// const http = require('http');
// const httpStatus = require('http-status-codes');
// const fs = require('fs');
// const router = require('./router');

// const routeMap = {
//     '/': 'views/index.html'
// };

// const getViewUrl = (url) => { //? 6.3 
//     return `views${url}.html`;
// };  

// http.createServer((req, res) => {
//     res.writeHead(httpStatus.OK, {
//         'Content-Type': 'text/html',
//     });
//     if (routeMap[req.url]) {
//         fs.readFile(routeMap[req.url], (error, data) => {
//             res.write(data);
//             res.end();
//         });
//     } else {
//         res.end('<h1>Sorry, not found</h1>');
//     }
// }).listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);
//* 6.2 - 6.3 end


//? 6.3
// http.createServer((req, res) => {
//     let viewUrl = getViewUrl(req.url); //? 6.3
//     fs.readFile(viewUrl, (error, data) => {
//         if (error) {
//             res.writeHead(httpStatus.NOT_FOUND);
//             res.write('<h1>FILE NOT FOUND</h1>');
//         } else {
//             res.writeHead(httpStatus.OK, {
//                 'Content-Type': 'text/html',
//             });
//             res.write(data);
//         }
//         res.end();
//     });
// }).listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);
//? 6.3 end


//? 6.4

// const sendErrorResponse = res => {
//     res.writeHead(httpStatus.NOT_FOUND, {
//         "Content-Type": "text/html"
//     });

//     res.write("<h1>File Not Found!</h1>");
    
//     res.end();
   
// };

// http.createServer((req, res) => {
//     let url = req.url;

//     if (url.indexOf(".html") !== -1) {
//         res.writeHead(httpStatus.OK, {
//             "Content-Type": "text/html"
//         });

//         customReadFile(`./views${url}`, res);

//     } else if (url.indexOf(".js") !== -1) {
//         res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/javascript"
//         });

//         customReadFile(`./public/js${url}`, res);
//     } else if (url.indexOf(".css") !== -1) {
//         res.writeHead(httpStatus.OK, {
//             "Content-Type": "text/css"
//         });
        
//         customReadFile(`./public/css${url}`, res);

//     } else if (url.indexOf(".png") !== -1) {
//         res.writeHead(httpStatus.OK, {
//             "Content-Type": "image/png"
//         });
        
//         customReadFile(`./public/images${url}`, res);
        
//     } else {
//         sendErrorResponse(res);
//     }
// }).listen(3000);

// console.log(`The server is listening on port number: ${port}`);

// const customReadFile = (file_path, res) => {
    
//     if (fs.existsSync(file_path)) {
    
//         fs.readFile(file_path, (error, data) => {
    
//             if (error) {
//                 console.log(error);
//                 sendErrorResponse(res);

//                 return;
//             }

//             res.write(data);
//             res.end();
//         });

//     } else {

//         sendErrorResponse(res);

//     }
// };
//? 6.4 end



//? 6.6

// plainTextContentType = {
//     "Content-Type": "text/plain"
// },
// htmlContentType = {
//     "Content-Type": "text/html"
// },

// customReadFile = (file_path, res) => {
//     fs.readFile(`./${file}`, (errors , data) => {
//         if (errors) {
//             console.log("Error reading the file...");
//         }
//         res.end(data);
//     });
// };

// router.get("/", (req, res) => {
//     res.writeHead(httpStatus.OK, plainTextContentType);
//     res.end("INDEX");
// });

// router.get("/index.html", (req, res) => {
//     res.writeHead(httpStatus.OK, htmlContentType);
//     customReadFile("views/index.html", res);
// });

// router.post("/", (req, res) => {
//     res.writeHead(httpStatus.OK, plainTextContentType);
//     res.end("POSTED");
// });

// http.createServer(router.handle).listen(port);
// console.log(`The server is listening on port number: ${port}`);








const port = 3000; 
const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');
const router = require('./router');

// Object that maps routes to file paths
const routeMap = {
    '/': 'views/index.html' // When the root URL is requested, serve 'index.html'
};

// Function to construct the file path for a given URL
const getViewUrl = (url) => { //? 6.3 
    return `views${url}.html`; // Appends '.html' extension to form the correct path
};  

// Content-Type headers for different response types
plainTextContentType = {
    "Content-Type": "text/plain" // Plain text response
},
htmlContentType = {
    "Content-Type": "text/html" // HTML response
};

// Function to read and send a file as a response
customReadFile = (file_path, res) => {
    fs.readFile(`./${file_path}`, (errors , data) => {
        if (errors) {
            console.log("Error reading the file..."); // Log an error message if file reading fails
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, plainTextContentType);
            res.end("File not found");
        } else {
            res.end(data); // Send the file content as response
        }
    });
};

// Route handler for GET request to the root URL "/"
router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType); // Set response status and content type
    res.end("INDEX"); // Send plain text response
});

// Route handler for GET request to "/index.html"
router.get("/index.html", (req, res) => {
    res.writeHead(httpStatus.OK, htmlContentType); // Set response status and content type
    customReadFile("views/index.html", res); // Send the content of 'index.html'
});

// Route handler for POST request to "/"
router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, plainTextContentType); // Set response status and content type
    res.end("POSTED"); // Send plain text response indicating the request was received
});

// Create an HTTP server using the router and listen on the specified port
http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`); // Log a message indicating the server is running










// const port = 3000;
// const http = require('http');
// const httpStatus = require('http-status-codes');
// const fs = require('fs');
// const router = require('./router');

// const htmlContentType = { "Content-Type": "text/html" };

// // Function to read and send HTML files
// const customReadFile = (file_path, res) => {
//     fs.readFile(`./${file_path}`, (errors, data) => {
//         if (errors) {
//             console.log("Error reading the file...");
//             res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, htmlContentType);
//             res.end("<h1>500 Internal Server Error</h1>");
//         } else {
//             res.writeHead(httpStatus.OK, htmlContentType);
//             res.end(data);
//         }
//     });
// };

// // Register the root (`"/"`) route to serve the index page
// router.get("/", (req, res) => {
//     customReadFile("views/index.html", res);
// });

// // Start the server
// http.createServer(router.handle).listen(port);
// console.log(`The server is listening on port number: ${port}`);
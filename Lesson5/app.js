// http = require("http");
// httpStatus = require("http-status-codes");

// const port = 3000;
// app = http.createServer();

// app.on("request", (req, res) => {//! 5.1 -5.4
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     });

//     let responseMessage = "<h1>This will show on the screen.</h1>";
//     res.end(responseMessage);

//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.headers);
// });

// app.listen(port);
// console.log(`The server has started and is listening on port number => ${port}`);



// //! 5.5

// const port = 3000,
//     http = require("http"),
//     httpStatus = require("http-status-codes"),
//     app = http.createServer();

// const getJSONString = obj => {
//     return JSON.stringify(obj, null, 2);
// };

// app.on("request", (req, res) => {
//     var body = [];
//     req.on("data", (bodyData) => {
//         body.push(bodyData);
//     });
//     req.on("end", () => {
//         body = Buffer.concat(body).toString();
//         console.log(`Request Body Contents: ${body}`);
//     });

//     console.log(`Method: ${getJSONString(req.method)}`);
//     console.log(`URL: ${getJSONString(req.url)}`);
//     console.log(`Headers: ${getJSONString(req.headers)}`);

//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     });

//     let responseMessage = "<h1>Helooooooooo.</h1>";
//     res.end(responseMessage);
// });

// app.listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);




//! 5.6 (final)
"use strict";

const routeResponseMap = {
    "/": "<h1>Welcome</h1>",
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
};

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {
        console.log("URL IS: ", req.url);
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
        } else {
            res.end("<h1>Page does not exist</h1>");
        }
    });
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);
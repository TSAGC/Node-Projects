http = require("http");
httpStatus = require("http-status-codes");

const port = 3000;


app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    let responseMessage = "<h1>Hello, Universe!</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
});


app.listen(port);// get port number
console.log(`The server has started and is listening on port number:➥ ${port}`);
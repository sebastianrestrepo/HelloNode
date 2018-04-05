//1. Hello NodeJS!
const http = require('http');
console.log(http);

var handler = function(request, response){
    console.log(request.url);
    console.log("New request");
    response.end("Hello World!");
}

var server = http.createServer(handler);

server.listen(5050);
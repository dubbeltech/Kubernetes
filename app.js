const http = require('http');
const os = require('os');
console.log("dubbel server starting...");
var handler = function(request, response){
	console.log("Recieved request from " + request.connection.remoteAddress);
	response.writeHead(200);
	response.end("you've hit " + os.hostname() + "\n");
};
var www = http.createServer(handler);
www.listen(8080);

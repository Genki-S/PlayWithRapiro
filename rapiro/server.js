var sys = require("sys");
var http = require("http");

// FIXME: is it ok to put this in global?
var requestCount = 0;

exports.getRequestCount = function() {
  return requestCount;
};

exports.start = function() {
  // TODO: cool routing
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("OK");
    response.end();

    requestCount += 1;
  }).listen("8888");
};

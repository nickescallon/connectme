var http = require("http");
var url = require('url');
var fs = require('fs');
//var handler = require("./request-handler");
var port = 8080;
var ip = "127.0.0.1";


/*---------SPLIT OUT TO DIFFERENT FILE---------------------*/
var getHandler = function(req, res){
  //add path handling!!!!
  var path = url.parse(req.url).path;

  if (path === '/'){
    path = '/public/index.html'
  }
  serveStatic(res, path);
};

var postHandler = function(req, res){
  //add path handling!!!!
  getData(req, res, sendResponse);
};

var optionsHandler = function(req, res){
  sendResponse(res, null);
}

var methods = {
  'GET' : getHandler,
  'POST' : postHandler,
  'OPTIONS' : optionsHandler
};

//exports.
handleRequest = function(req, res){
  var method = methods[req.method];
  method ? method(req, res) : sendResponse(res, '404: not found', 404);
}

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

/*-------------HELPERS - PULL OUT TO ANOTHER FILE ------------------------*/

var sendResponse = function(res, data, status){
  status = status || 200;
  res.writeHead(status, defaultCorsHeaders);
  res.end(data);
};

var serveStatic = function(res, asset) {
  fs.readFile('.' + asset, 'utf8', function(err, data){
    if (err){
      sendResponse(res, "404:File not found", 404);
    }else{
      sendResponse(res, data);
    }
  });
};


var getData = function(req, res, cb){
  var dataString = '';
  var status = 201;

  req.on('data', function(chunk){
    dataString += chunk;
  });

  req.on('end', function(data){
    storage.push(JSON.parse(dataString));
    cb(res, dataString, status);
  });
};

/*------------------------RUN THE SERVER STAYS IN THIS FILE-------------------------*/
var server = http.createServer(handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
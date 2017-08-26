Notes --->  Calling the express function gives us an application instance.
var express = require('express');
var app     = express();

Notes --->  Calling the express function gives us an application instance.
Notes --->  The app.get function creates a route that accepts get request.
app.get('/', function(request, response){
  response.send('Hello World');
});

app.listen(3000);

Notes --->  there are built in functions named after the http verbs
Notes --->  app.post, app.get, app.patch, app.delete
Notes --->  The app.listen function takes an optional callback,which is called once
            the app is ready to start taking requests

app.listen(3000, function() {
  console.log('Listening on port 3000');
})

Notes ---> Running the express app -> Start the server with the node command. This is the node command --> $ node app.js then it will give the message --> Listening on port 3000
Notes ---> Rememeber changes to code requires a server restart. Control C stops the server. What is curl --> Curl is used in the command lines or scripts to transfer data.
Notes ---> Curl is used in cars, tv, routers, printers, audio equipment, mobile phones, tablets and its the internet backbone for thousands of software applications.
Notes ---> The command line for curl is --> curl http://localhost:3000/ and in this case should return Hello World!.
Notes ---> Rememeber you have to cancel the listening port by selecting -> control -c on <-- on the command line.

                                                                   The Request and response objects:
Notes ---> Express extends Node Http objects:
Notes ---> res -> response, and req -> request they are objects from Node HTTP (prototypes) and they both are an inheritence from javascript. They are also known as the express source code
                                                                    This is what happens on the back end when you use (req, and res):
Example of response and request  --->
                                      var req = exports = module.exports = { __proto__: http.IncomingMessage.prototype};...
                                      var res = exports = module.exports = { __proto__: http.ServerResponse.prototype};...

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

                                                                  Calling Node and HTTP functions:

Notes ---> We can respond to express using nodes write and end functions ...(very useful when we start writing 'extension' for express).
example:
var express = require('express');
var app     = express();

app.get('/', function(req, res){
  response.write('Hello World') or we can use (response.send('Hello World') this is the samething! This is using express API)
  response.end(); This is using node
})
app.listen(3000);

Notes ---> Response from both
example:
$ curl http://localhost:3000/
Response ---> Hello World <--- Cool right!!

                                                    Responding with JSON: The send function converts Objects and Arrays to JSON:
example:
app.get('/blocks', function(request, response){
  var blocks = ['fixed', 'Movable', 'Rotating'];
  response.send(blocks);
});

Notes ---> use i to print the response headers
$ curl -i http://localhost: 3000/blocks

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf8-8 Note ---> this sets the proper response headers
['fixed', 'Movable', 'Rotating']

                                          Using the response.json function: The JSON function reads better when all we respond with is JSON:

app.get('/blocks', function(req, res) {
  var blocks = ['fixed', 'Movable', 'Rotating'];
  response.json(blocks);
});

Notes ---> Same response as send, Objects and Arrays
$ curl -i http: //localhost : 3000 /blocks

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf8-8 Note ---> this sets the proper response headers
['fixed', 'Movable', 'Rotating']

                                                        Responding with HTML: The send function converts strings to HTML:

app.get('/blocks', function(req, res) {
  var blocks = '<ul><li>Fixed</li><li>Movable</li><li>Rotating<li></ul>';
  response.end(blocks);
)};
Notes Bonus ---> For server-side templates, checkout checkout EJS and Jade
Notes --->  responds with text/html
$ curl -i http://localhost: 3000/blocks

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf8-8 Note ---> this sets the proper response headers
'<ul><li>Fixed</li><li>Movable</li><li>Rotating<li></ul>'

                                    Redirecting to relative path: The redirect function sets the proper response headers:

app.get('/blocks', function(req, res) {
  response.redirect('/parts');
});

$ curl -i http://localhost: 3000/blocks

HTTP:/1.1 302 Moved Temporarily
X-Powered-By: Express
Location: /parts
Contain-Type: text/plain; charset=utf-8

Moved Temporarily. Redirecting to /parts

                                  Redirecting with custom status code: The status code can be passed as the first argument to redirect.

app.get('/blocks', function(req, res) {
  response.redirect(301, '/parts');
});

$ curl -i http://localhost: 3000/blocks
HTTP:/1.1 301 Moved Permanently
X-Powered-By: Express
Location: /parts
Contain-Type: text/plain; charset=utf-8

Moved Permanently. Redirecting to /parts

                                                                                MiddleWare: Writing our own:
                                                                                     Level 2 - Part II

Writing the logger module:
Note ---> We assign our logger function to module.exports in order to export it as a Node module and make it accessible from other files.
app.js
logger.js                                    ------> module.exports = function(request, response, next){
Note ---> The Node module system follows the CommonJS specification.
}
public

Tracking the start time for the request:
Note ---> We use the Date object to track the start time.

app.js
logger.js                                    ------>  module.exports = function(request, response, next){
                                                       var start = +new Date(); <--- plus sign converts date Objext to milliseconds.
                                                       next(); <---- moves request to the next MiddleWare in the stack!
}
public

Assigning the readable stream:
Note ---> Standard out is a writeable stream which we will be writing the log to.

app.js
logger.js                                    ------> module.exports = function(request, response, next) {
                                                      var start = +new Date();
                                                      var stream = process.stdout;
                                                      next();
}
public

Reading the url and HTTP method:
The request object gives us the requested URL and the HTTP method used.

app.js
logger.js                                    ------> module.exports = function(request, response, next) {
                                                      var start = +new Date();
                                                      var stream = process.stdout;
                                                      var url = request.url;
                                                      var method = request.method;
                                                      next();
}
public

Listening for the finish event:
Note ---> The response object is an EventEmitter which we can use to listen to events.

app.js
Logger.js                                    -------> module.exports = function(request, response, next) {
                                                        var start = += Date();
                                                        var stream = process.stdout;
                                                        var url = request.url;
                                                        var method = request.method;

                                                        response.on('finish', function() {
                                                          ...
                                                        });  
}
public

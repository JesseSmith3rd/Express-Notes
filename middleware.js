                                        MiddleWare: How they work!

Level two: Part one

                                        Rich Javascript Applications:
                          They allow for a more interactive  experience on the web.
                                          Lets build using Express!

First step:  Client -----------> initial requet ----------->   Server
Second step: Client <----------- index.html is returned <----- Server
Third step:  Client -----------> AJAX Request ------------->   Server
Fourth step: Client <----------- JSON is returned <----------- Server


                                        Writing index.hmtl:
                              Place HTML files under the public folder:
Example:
app.js
public/
  index.html     --------------> Index.HTML example:
                                <!DOCTYPE html>
                                <html lang="en">
                                <head>
                                  <meta charset="UTF-8">
                                  <title>Building Blocks</title>
                                </head>
                                <body>
                                  <h1>Blocks</h1>
                                </body>
                                </html>


                                        Serving files with sendfile:
                              The index.html file is served from express:
Example:
app.js
public/
index.html     ---------------->  var express = require('express');
                                  var app     = express();

                                  app.get('/', function(request, response) {
                                  response.sendFile(__dirname + '/public/index.html'); <--- Notes: Name of the directory the currently exectuing
                                  });                                                       scripts resides in.
                                  app.listen(3000);
Note ---> browser outcome --> localhost: 3000 --> Blocks

                                           Mounting MiddleWare:
                      The app.use function adds MiddleWare to the application stack:


Example:
app.js
public/
index.html     ---------------->  var express = require('express');
                                  var app     = express();

                                  app.use(express.static('public')) <---Static MiddleWare serving files from the public folder
                                  app.listen(3000);
Notes ---> Same browser outcome --> localhost:3000 ---> Blocks

Lets take the time to understand MiddleWare:
Functions executed sequentially that access request and response:
         Express:
         MiddleWare A  --------------------> Validation
         MiddleWare B  --------------------> Authentication
         MiddleWare C  --------------------> Data Parsing
         app.get('/Blocks')
This sends to the client and the client sends back to express to start the process again.


                                      Executing MiddleWare Functions:
                  When next is called, processing moves to the next MiddleWare:
          Express:
          app.use(function(request, response, next ) {
            next();  ----> MiddleWare A.
          }):
          Notes ---> moves to the next MiddleWare in the stack
          ...next(); MiddleWare B.
          ...next(); MiddleWare C.
          app.use(function(request, response, next) {
            ...
            response.send('done!');
          });    ----- MiddleWare N.
Notes: In the above example. When you pass in next as an argument, the process will move from MiddleWare A, then, B, to C, and finally to N,
After that it will send to the client.

                                      Returning from MiddleWare functions:
                          The flow stops once the response is sent back to the client.
Express:
         app.use(function(request, response, next) {
           ...
           next();
         }); ----> MiddleWare A.

         app.use(function(request, response, next) {
           response.send('done!');
           next(); <---- Calling next() after response is complete causes errors
         }); ----> MiddleWare B. --> remaining MiddleWare will not Running
         MiddleWare C.
         MiddleWare D.

                                        Reading the static MiddleWare source:
                           The code for static is a good example of express MiddleWare
source code from static:                              https://github.com/express.js/serve-static
 index.js
 exports = module.exports = function serverStatic(root, options) {
   ...
   return function serverStatic(req, res, next) {
     if (req.method !== 'GET' && req.method !== 'HEAD') {
       return next()
     }
     stream.pipe(res)
   }
 }

                                         Serving static assets:
                    The static MiddleWare serves everything under the specified folder

app.js                       ---->                       app.use(express.static('public'));
 public/
   index.html                ---->                       <!DOCTYPE html>
   	                                                     ...
                                                         <body>
                                                          <h1>Blocks</h1>
                                                          <p><img src='blocks.png'></p>
                                                        </body>
                                                        </html>
    blocks.jpg  ---> This will show in the browser --> Blocks and a jpg image --> under localhost:3000

                                         Fetching a List of Blocks:
                                  Loading data from Express with AJAX calls

Client ------------request to/ --->  Server
Client <-----------                  Server
Client -----------> AJAX to/Blocks > Server
Client <-----------                  Server  -----> localhost:3000 ---> Blocks

// const http = require('./http.js'); // look for local file
const fs = require('fs');
const http = require('http'); // load module

// 
const routes = require('./routes');



// main
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000); // port localhost 


const  http = require('http');

// function rqListener(req, res) {

// }

// Alternative //
// http.createServer((req, res) => {
    
// });

const server = http.createServer(function(req, res) {
    console.log(req);
});

server.listen(3000);
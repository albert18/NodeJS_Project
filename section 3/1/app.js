const  http = require('http');

// function rqListener(req, res) {

// }

// Alternative //
// http.createServer((req, res) => {
    
// });

const server = http.createServer(function(req, res) {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1>Hello from my Node JS</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
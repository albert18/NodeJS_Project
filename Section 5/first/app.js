const http = require('http');


const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware')
    next(); // Allows to go to next in line
});

app.use((req, res, next) => {
    console.log('Another middleware')
    res.send('<h1>Test</h1>')
});

// const server = http.createServer(app);

app.listen(3000);

// const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('Another middleware')
    res.send('<h1>Product</h1>')
    
});

app.use('/', (req, res, next) => {
    console.log('Another middleware')
    res.send('<h1>Test</h1>')
});





// const server = http.createServer(app);
app.listen(3000);

const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const hostname = 'localhost';
const port = 3000;


const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
// app.use((req, res, next)=> {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     next();
// });


app.all('/dishes', (req, res, next)=>{
    res.statusCode = 300;
    res.setHeader('Content-Type', 'text/html');
    next();
});
app.get('/dishes', (req, res, next)=> {
    res.end('We will send dishes to you');
});
app.post('/dishes', (req, res, next) => {
    console.log(req.body.name);
    res.end(`We will add dish ${req.body.name}, ${req.body.description}`);
});
app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('Operation not supported');
});
app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all dishes');
});

app.get('/dishes/:dishId', (req, res, next)=> {
    res.end(`We will send details of dish ${req.params.dishId}`);
});
app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end(`Post Operation not supported on /dishes/${req.params.dishId}` );
});
app.put('/dishes/:dishId', (req, res, next) => {
    res.write('updating...');
    res.end(`Will update the dish ${req.params.dishId}`);
});
app.delete('/dishes/:dishId', (req, res, next) => {
    res.end(`Deleting dish ${req.params.dishId}`);
});


const server = http.createServer(app);

server.listen(port, hostname, ()=> {
    console.log(`Server running on ${hostname}:${port}`);
});

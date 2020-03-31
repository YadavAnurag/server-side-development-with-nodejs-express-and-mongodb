const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next)=>{
        res.statusCode = 300;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next)=> {
        res.end('We will send dishes to you');
    })
    .post((req, res, next) => {
        console.log(req.body.name);
        res.end(`We will add dish ${req.body.name}, ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Operation not supported');
    })
    .delete((req, res, next) => {
        res.end('Deleting all dishes');
    });


dishRouter.route('/:dishId')
    .all((req, res, next)=>{
        res.statusCode = 300;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next)=> {
        res.end(`We will send details of dish ${req.params.dishId}`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`Post Operation not supported on /dishes/${req.params.dishId}` );
    })
    .put((req, res, next) => {
        res.write('updating...');
        res.end(`Will update the dish ${req.params.dishId}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting dish ${req.params.dishId}`);
    });


module.exports = dishRouter;

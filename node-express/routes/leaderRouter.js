const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next)=>{
        res.statusCode = 300;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next)=> {
        res.end('We will send leaders to you');
    })
    .post((req, res, next) => {
        res.end(`We will add leader ${req.body.name}, ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Operation not supported');
    })
    .delete((req, res, next) => {
        res.end('Deleting all leaders');
    });


leaderRouter.route('/:leaderId')
    .all((req, res, next)=>{
        res.statusCode = 300;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next)=> {
        res.end(`We will send details of leader ${req.params.leaderId}`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`Post Operation not supported on /leaders/${req.params.leaderId}` );
    })
    .put((req, res, next) => {
        res.write('updating...');
        res.end(`Will update the leader ${req.params.leaderId}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting leader ${req.params.leaderId}`);
    });


module.exports = leaderRouter;

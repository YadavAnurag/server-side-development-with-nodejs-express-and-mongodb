const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next)=>{
        res.statusCode = 300;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next)=> {
        res.end('We will send promotions to you');
    })
    .post((req, res, next) => {
        res.end(`We will add promotion ${req.body.name}, ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Operation not supported');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotions');
    });


promoRouter.route('/:promotionId')
    .all((req, res, next)=>{
        res.statusCode = 300;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next)=> {
        res.end(`We will send details of promotion ${req.params.promotionId}`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`Post Operation not supported on /promotions/${req.params.promotionId}` );
    })
    .put((req, res, next) => {
        res.write('updating...');
        res.end(`Will update the promotion ${req.params.promotionId}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting promotion ${req.params.promotionId}`);
    });


module.exports = promoRouter;

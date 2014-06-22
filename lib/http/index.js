/*!
 * q - http
 * Copyright (c) 2011 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var express = require('express');

// setup

var app = express()
    , provides = require('./middleware/provides')
    , stylus = require('stylus')
    , routes = require('./routes')
    , json = require('./routes/json')
    , bodyParser = require('body-parser')
    , util = require('util')
    , nib = require('nib');

// expose the app

module.exports = app;

// stylus config

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib());
}

// config

app.set('view options', { doctype: 'html' });
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.set('title', 'Kue');
app.locals = { inspect: util.inspect };

// middleware
var site = express.Router();

site.use(bodyParser.json());
site.use(bodyParser.urlencoded());

site.use(stylus.middleware({ src: __dirname + '/public', compile: compile }));
site.use(express.static(__dirname + '/public'));

// JSON api

site.get('/stats', provides('json'), json.stats);
site.get('/job/search', provides('json'), json.search);
site.get('/jobs/:from..:to/:order?', provides('json'), json.jobRange);
site.get('/jobs/:type/:state/:from..:to/:order?', provides('json'), json.jobTypeRange);
site.get('/jobs/:state/:from..:to/:order?', provides('json'), json.jobStateRange);
site.get('/job/types', provides('json'), json.types);
site.get('/job/:id', provides('json'), json.job);
site.get('/job/:id/log', provides('json'), json.log);
site.get('/job/retry/:type', provides('json'), json.retryJobByType);
site.put('/job/:id/state/:state', provides('json'), json.updateState);
site.put('/job/:id/priority/:priority', provides('json'), json.updatePriority);
site.delete('/job/:id', provides('json'), json.remove);

site.post('/job', provides('json'), json.createJob);

// routes

site.get('/', function (req, res) {
//    res.redirect('active')
    (app.path() === '/') ? res.redirect('/active') : res.redirect('active');
});
site.get('/active', routes.jobs('active'));
site.get('/inactive', routes.jobs('inactive'));
site.get('/failed', routes.jobs('failed'));
site.get('/complete', routes.jobs('complete'));
site.get('/delayed', routes.jobs('delayed'));

site.get('/job/active', routes.jobs('active'));
site.get('/job/inactive', routes.jobs('inactive'));
site.get('/job/failed', routes.jobs('failed'));
site.get('/job/complete', routes.jobs('complete'));
site.get('/job/delayed', routes.jobs('delayed'));

app.use('/', site);

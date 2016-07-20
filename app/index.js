// require modules
const express = require('express');
const app = express();

// require: motivations & pick-one
const motivations = require('motivations');
const pickOne = require('pick-one');

app.get('/hello', function(request, response){
    console.log("request to /hello");
    response.send("Hello!");
});

app.get('/', function(req, res){
    res.send(pickOne(motivations));
});
// use pick one

module.exports = app;

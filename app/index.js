// require modules
const express = require('express');
const app = express();

// setup first route
app.get('/hello', function(request, response){
    console.log("request to /hello");
    response.send("Hello!");
});

module.exports = app;

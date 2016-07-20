// required packages
const port = process.env.PORT || "8000";
const host = process.env.HOST || "0.0.0.0";
const express = require("express");

// the express program exe as (called app)
const app = express();

// listeing on port then host; always in that order
app.listen(port, host);

// link to app
const rules = require('./app')
app.use(rules);


console.log("It's alive! >:D");

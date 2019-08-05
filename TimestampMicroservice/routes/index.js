'use strict';
var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/api/timestamp/:date_string', function (req, res) {
    // Getting the parameter string
    let date_string = req.param("date_string");

    // Check if the received date is in milliseconds
    if (isNaN(date_string) === true)
        var dt = new Date(date_string);
    else dt = new Date(parseInt(date_string));

    // Checking if the date is valid
    if (!isNaN(dt.getTime()))
        res.send({ unix: dt.getTime(), utc: dt.toUTCString() });
    else res.send({ error: "Invalid Date" });
});

router.get('/api/timestamp/', function (req, res) {
    // Return today's date
    res.send({ unix: (new Date).getTime(), utc: (new Date).toUTCString() });
});

module.exports = router;

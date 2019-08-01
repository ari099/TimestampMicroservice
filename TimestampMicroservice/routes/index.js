'use strict';
var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/api/timestamp/:date_string', function (req, res) {
    let date_string = req.param("date_string");
    if (isNaN(date_string) === true)
        var dt = new Date(date_string);
    else dt = new Date(parseInt(date_string));
    res.send({ unix: dt.getTime(), utc: dt.toUTCString() });
});

router.get('/api/timestamp/', function (req, res) {
    res.send({ unix: (new Date).getTime(), utc: (new Date).toUTCString() });
});

module.exports = router;

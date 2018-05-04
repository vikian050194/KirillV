var express = require('express'),
    router = express.Router(),
    path = require('path'),
    data = require('./data.json');

if (process.env.NODE_ENV === 'production') {
    router.route('/')
        .get(function (req, res) {
            res.sendFile(path.resolve(__dirname + '/../client/index.html'));
        });
}

router.route('/data')
    .get(function (req, res) {
        res.send(data);
    });

module.exports = router;
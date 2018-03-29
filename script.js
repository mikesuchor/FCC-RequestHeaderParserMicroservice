var express = require('express');
var app = express();
var port = 8080;

app.get('/', function(req, res) {
    var ipaddress = req.ip;
    var language = req.acceptsLanguages()[0];
    var software = req.headers['user-agent'];
    res.json({
        ipaddress: ipaddress,
        language: language,
        software: software
    });
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});
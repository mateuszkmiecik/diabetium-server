var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var localMemory = require('./memory');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send({
        name: "diabetium-server",
        about: "Application server for synchronizing data from Diabetium app for Android"
    });
})

app.get('/get', function (req, res) {
    res.send(localMemory.getMemory());
});


app.post('/post', function(req, res){
    localMemory.setEntries(req.body);
    res.send({status: "ok"});
});

app.listen(process.env.PORT || '3000', function () {
    console.log('Listening on port 3000')
});
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var localMemory = require('./memory');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(express.static(__dirname + '/public'));

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

app.get('/get/:id', function (req, res) {
    var entries = localMemory.getOne(req.params.id);
    if(!entries){
        return res.status(404).send({status: "ClientID not found"});
    }else{
        res.send(entries);
    }
});

app.get('/get', function (req, res) {
    res.send(localMemory.getMemory());
});



app.post('/post', function(req, res){
    if(!req.body.clientId || !req.body.entries){
        res.status(400).send({status: 'bad request', message: 'Posted data should contain clientId and entries fields.'});
    } else {
        localMemory.setEntries(req.body);
        res.send({status: "ok"});
    }
});

app.listen(process.env.PORT || '3000', function () {
    console.log('Listening on port 3000')
});
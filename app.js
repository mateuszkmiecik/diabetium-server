
var express = require('express');
var app = express();
var fs = require('fs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Server default page');
})

app.get('/get', function (req, res) {
    res.send('Got GET Request');
    console.log('GET working')
});


var myPromiseTask = function(filename, content){
    return new Promise(function(resolve, reject){
        fs.writeFile(filename, content, function(err){
            if(err) return reject(err);
            return resolve('saved');
        })
    });
};

app.post('/test', function (req, res) {
    var entries = req.body;
    myPromiseTask('entries/entriesDatabase', entries).then(function(result){
        console.log(result);
        res.send('Got a POST request');
    }).then(function (jedynka) {
        console.log(jedynka);
    });
    console.log('POST working');
});

app.listen(3000, function () {
    console.log('Listening on port 3000')
});



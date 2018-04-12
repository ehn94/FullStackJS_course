var express = require("express")
var app = express()
var port = 7777
var facade = require("./facade")

var bodyParser = require('body-parser');

app.listen(port, function () {
    console.log("Server Started at Port " + port)
})

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/api/tasks", function (req, res) {
    facade.getTasks(function (tasks) {
        res.send(JSON.stringify(tasks))
    })})
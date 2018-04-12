var express = require("express")
var app = express()
var port = 7777
var facade = require("./facade")
var bodyParser = require('body-parser')
let api = require("./bookApi")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api", api)

app.listen(port, function(){
    console.log("Server Started at Port " + port)
}) 

app.get("/api/books", function(req, res){
    facade.getBooks(function(books){
        res.send( JSON.stringify(books))
        console.log("Get booooks from index.js"); 
    })});
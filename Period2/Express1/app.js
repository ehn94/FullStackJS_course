var express = require('express');
var path = require('path')

var app = express();

//Configure app
app.set('view engine', 'ejs');
app.set('Views', path.join(__dirname, 'Views'));

//Use middleware

//Define routes

app.get('/', function(req, res){
    res.send('Hello express!');
});

app.listen(1337, function(){
    console.log("ready on port 1337");
});
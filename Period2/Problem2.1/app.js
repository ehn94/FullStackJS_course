var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var hbs = require('hbs')

var index = require('./routes/index');
var users = require('./routes/users');
var jokes = require('./routes/joke');
var login = require('./routes/login');

var apiRandomJoke = require('./api/random');
var apiAllJokes = require('./api/jokes');
var apiAddJoke = require('./api/joke');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname,'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));

app.use(function (req, res, next) {
  var sess = req.session
  if (sess.username) { 
    return next(); 
  }
  var userName = req.body.username;
  if (userName) { 
    sess.username = userName;
    return res.redirect("/");
  }
  //Hvis der ikke blev fundet noget brugernavn i sessionen, bliver man redirectet til login siden
  req.url = "/login";
  next();
});

app.use('/', index);
app.use('/login', login);
app.use('/users', users);
app.use('/joke', jokes);

//RESTless api
app.use('/api/joke/random', apiRandomJoke);
app.use('/api/jokes', apiAllJokes);
app.use('/api/joke', apiAddJoke);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, function () {
    console.log("Server started, listening on: " + 3000);
});


module.exports = app;
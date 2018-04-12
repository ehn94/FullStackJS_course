let router = require("express").Router();
var Book = require('../models/bookStore');

router.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

router.get('/books', function (req, res, next) {
  Book.find({}, function (err, books) {
    if (err) throw err;
    let arr = books
    let j = JSON.stringify(arr);
    res.send(j);
  
  });
    console.log("Get booooks from api.js");
});
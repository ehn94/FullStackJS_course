var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");
/* GET home page. */
router.post("/:joke", function(req, res, next) {
  var newJoke = req.body.joke;
  jokes.addJoke(newJoke);
  res.send("Ny joke: " + newJoke);
});

module.exports = router;
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = "mongodb://localhost/books"

MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    findDocuments(db, function () {
        db.close();
    });
});

var findDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('books');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
}

function getBooks(callback) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err)
    assert.ok(db != null)
    db.collection("books").find({}).toArray(function (err, data) {
      assert.equal(null, err)
      var books = data
      callback(books)
      db.close()
    })
    console.log("Get books from db.js");
  })
}

var crud = {
  getBooks: getBooks,
}

module.exports = crud;
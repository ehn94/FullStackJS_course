var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27017/books'
var autoIncrement = require("mongodb-autoincrement");


function setURL(newURL){
    url = newURL
}

function getBooks(callback){
    console.log("Get books from facade ");
    MongoClient.connect(url, function(err,db){
        assert.equal(null,err)
        assert.ok(db != null)

        db.collection("books").find({}).toArray(function(err,data){
            assert.equal(null,err)
            var books = data
            callback(books)
            db.close()
        })
    })
}/*
function addBook(book, callback) {
  console.log(book + " new book db.js")
  MongoClient.connect(url, function (err, db) {
    console.log("Connected to mongo, db.js ")
    var collection = db.collection("books")
    collection.insert(book, function (err, data) {
      assert.equal(null, err)
      callback(data)
    })
  })
}
*/
function addBook(book, callback){ //Prøv at lave console log og se hvornår dataen ikke er null
    console.log("From facade.js Title: " + book.title)

    MongoClient.connect(url, function(err,db){
        assert.equal(null,err)
        assert.ok(db != null)
        
        autoIncrement.getNextSequence(db, "books", function (err, autoIndex) {
                var collection = db.collection("books")
                book.id = autoIndex
                
                collection.insert({id: book.id, title: book.title, info: book.info, moreInfo: book.moreInfo}, function(err,data){
                    assert.equal(null,err)
                    callback(data)
                })
            })

        })
}

function deleteBook(bookId, callback){
    MongoClient.connect(url, function(err,db){
        assert.equal(null,err)
        assert.ok(db != null)

        db.collection("books").deleteOne({id: bookId}, function(err,data){
            assert.equal(null,err)
            var response = data
            callback(response)
        })
    })
}

function updateBook(book,callback){
    MongoClient.connect(url,function(err,db){
        assert.equal(null,err)
        assert.ok(db != null)
        var options = {
            returnOriginal : false,
            upsert: true
        }

        db.collection("books").findOneAndReplace({id: book.id},
                    {$set: {"id": book.id, "title": book.title, "info": book.info, "moreInfo": book.moreInfo}},
                    options,
                            function(err,data){
                            assert.equal(null,err)
                            var updatedBook = data.value
                            callback(updatedBook)
                            })
    })
}

var facade = {
    getBooks: getBooks,
    addBook : addBook,
    deleteBook : deleteBook,
    updateBook : updateBook,
    setURL : setURL
}

module.exports = facade
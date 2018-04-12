var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27017/books'

function getBooks(callback){
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
}

var facade = {
    getBooks: getBooks
}

module.exports = facade
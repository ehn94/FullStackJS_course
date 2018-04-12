var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27017/tasks'
var autoIncrement = require("mongodb-autoincrement");

function setURL(newURL){
    url = newURL
}

function getTasks(callback){
    MongoClient.connect(url, function(err,db){
        assert.equal(null,err)
        assert.ok(db != null)

        db.collection("tasks").find({}).toArray(function(err,data){
            assert.equal(null,err)
            var tasks = data
            callback(tasks)
            db.close()
        })
    })
}
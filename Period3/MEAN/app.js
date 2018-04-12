var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

      db.close();
    });
  
var insertJokes = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('jokes');
  // Insert some documents
  collection.insertMany([
    {"joke":" Reality is an illusion created by a lack of alcohol","type":["short","alcohol","quote"],"reference":{"author":"Someone","link":""},"lastEdited":new Date()},{"joke":"I used to think the brain was the most important organ. Then I thought, look what’s telling me that","type":["short","joke"],"reference":{"author":"Unknown","link":"http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},"lastEdited":new Date()}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

  // Get the documents collection
  var collection = db.collection('documents');

var jokes=[{"joke":" Reality is an illusion created by a lack of alcohol","type":["short","alcohol","quote"],"reference":{"author":"Someone","link":""},"lastEdited":new Date()},{"joke":"I used to think the brain was the most important organ. Then I thought, look what’s telling me that","type":["short","joke"],"reference":{"author":"Unknown","link":"http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},"lastEdited":new Date()},{"joke":"You kill vegetarian vampires with a steak to the heart","type":["short","joke","foot"],"reference":{"author":"Unknown","link":"http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},"lastEdited":new Date()},{"joke":"A blind man walks into a bar. And a table. And a chair","type":["short","joke","blind"],"reference":{"author":"Someone","link":"http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},"lastEdited":new Date()},{"joke":"How does NASA organize their company parties? They planet","type":["short","joke","riddle"],"reference":{"author":"Unknown","link":"http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},"lastEdited":new Date()},{"joke":"Why was six afraid of seven? Because seven was a well known six offender","type":["short","joke","riddle"],"reference":{"author":"Unknown","link":"http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},"lastEdited":new Date()}]
var result=db.jokes.insert(jokes);printjson(result);
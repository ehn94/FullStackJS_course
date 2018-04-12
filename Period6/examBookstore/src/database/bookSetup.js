var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/books", function (err, db) {
    var collection = db.collection('books');
    collection.insertMany(books, function (err, data) {
        console.log(JSON.stringify(data));
        db.close();
    });
});
var books =
    [
        { "id": 1, "title": "How to Learn JavaScript - Vol 1", "info": "Study hard", "moreInfo": "" },
        { "id": 2, "title": "How to Learn ES6", "info": "Complete all exercises :-)", "moreInfo": "" },
        { "id": 3, "title": "How to Learn React", "info": "Complete all your CA's", "moreInfo": "" },
        {
            "id": 4, "title": "Learn JavaScript, React and MobX", "info": "Don't drink beers, until Friday (after four)",
            "moreInfo": "5 Points = 5 beers ;-)"
        }];

    
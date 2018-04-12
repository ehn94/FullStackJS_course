var request = require("request");

// GET
request('http://localhost:8080/api/books', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("Get all books work");
    }
});

// POST
request({
        url: "http: //localhost:8080/api/books",
        method: "POST",
        json: true,
        body: {
            book: "I'm a book"
        }
    },
    function (error, res, body) {
        if (!error && res.statusCode == 200) {
            console.log("Okay");
        }
    });
    
// PUT
request({
        url: "http: //localhost:3000/api/book/3",
        method: "PUT",
        json: true,
        body: {
            book: "I'm an updated book"
        }
    },
    function (error, res, body) {
        if (!error && res.statusCode == 200) {
            console.log("body");
        }
    });

// DELETE
request({
        url: "http: //localhost:3000/api/book/3",
        method: "Delete",
    },
    function (error, res, body) {
        if (!error && res.statusCode == 200) {
            console.log("body");
        }
    });
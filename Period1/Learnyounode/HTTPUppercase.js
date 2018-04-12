const http = require('http');

var server = http.createServer(function(req, res) {
    //if(req.method != "POST") resp.end('I respond to POST only');

    var body = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){
        body+=chunk;
    })

    req.on('end', function(){
        res.end(body.toUpperCase());
    })

});
server.listen(process.argv[2]);
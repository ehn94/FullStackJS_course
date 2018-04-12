var files = process.argv.slice(2);
var count = 0;
var results = [];
var http = require('http');
function printOut() {
    for (var t = 0; t < results.length; t++) {
        console.log(results[t]);
    }
}

function run(id){
    count++;
    http.get(files[id], function(response) {
        var output = '';

        response.setEncoding('utf8');
        response.on("data", function(data) {
            output += data;
        });
        response.on("end", function() {
            count--;
            //console.log(count);
            results[id] = output;
            if (count === 0) {
                printOut();
            }
        });
        }).on('error', function(e){
                console.log("error:" + e.message);
            });

}

for(var j = 0; j < files.length; j++){
    //console.log('Running ' + (j+1) + 'st get');
    run(j);
}
http = require("http");
var info = [];

http.get(process.argv[2],function(res){
    res.setEncoding('utf8');
    res.on("data",function(input){
        info.push(input);
    });
    res.on("error",console.error);
    res.on("end",function(){
        console.log(info.join("").length);
        console.log(info.join(""));
    });
});
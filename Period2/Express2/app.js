const express = require('express');

const app = express();

app.use(function(req, res, next){
    console.log('Time:', Date.now()+ 'Log all requests');
    next();
});

app.use(function(req, res, next){
    req.status = "SuperUser";
    next();
});

app.get("/", (req, res)=>{
    const status = req.status;
    res.send("Hello! " + status);
});

app.get("/world", (req, res)=>{
    res.send("Hello wonderful world!");
});

app.listen(1337, ()=>    console.log("Ready on port 1337"));


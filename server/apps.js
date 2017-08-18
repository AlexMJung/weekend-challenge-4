var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//need path to module

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.json());

//app.use(/*add the request catcher in quotes'', then the modules path*/);


app.listen(port, function(){
    console.log('listening on port:',port)
})
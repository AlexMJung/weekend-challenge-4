var express = require('express');
var bodyParser = require('body-parser');
var employees = require('./routes/employees');
var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));//should only matter for j query which isn't being used. added to solve errors.
app.use(bodyParser.json());

app.use('/employees', employees);


app.listen(port, function () {
    console.log('listening on port:', port);
});
var pg = require('pg');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require ('body-parser');
var conString = "postgres://postgres:discos@localhost/postgres";

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function(req, res){
	console.log('GET requested');
});

app.post('/', function(req, res){
	console.log('POST requested');
});

app.listen(3000);
console.log('Web server listening at http://localhost:3000');
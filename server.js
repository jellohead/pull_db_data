var pg = require('pg');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require ('body-parser');
var conString = "postgres://postgres:discos@localhost/postgres";

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/db', function(req, res){
	console.log('GET requested');
	pg.connect(conString, function(err, client, done) {
		if(err) return;

		client.query('SELECT * FROM comments', function(err, result) {
			if(err) return;
			done();
			console.log(JSON.stringify(result.rows, null, 2));
			console.log('--------------------');
			console.log(result.rows);
			res.writeHead(200, {'content-type': 'text/plain'});
			res.end(JSON.stringify(result.rows));
		});
	});
});

app.post('/', function(req, res){
	console.log('POST requested');
});

app.listen(3000);
console.log('Web server listening at http://localhost:3000');
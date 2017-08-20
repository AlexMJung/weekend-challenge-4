var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');


router.get('/', function (req, res) {
	console.log('router.get was hit');
	pool.connect(function (errorConnectingToDatabase, client, done) {
		if (errorConnectingToDatabase) {
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			client.query('SELECT * FROM employees;', function (errorMakingQuery, result) {
				done();
				if (errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					console.log('results sent');
					res.send(result.rows);
					}//end of nested else
			});//end of client.query
		} //end of first else
	});// end of pool.connect
});//end of router.get

router.post('/', function (req, res) {
	console.log('router.get was hit');
	pool.connect(function (errorConnectingToDatabase, client, done) {
		if (errorConnectingToDatabase) {
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			client.query('INSERT INTO employees (first_name, last_name, job_title, salary) values ($1,$2,$3,$4 );', [req.body.first_name, req.body.last_name, req.body.job_title, req.body.salary], function (errorMakingQuery, result) {
				done();
				if (errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					console.log('results sent');
					res.send(result.rows);
					}//end of nested else
			});//end of client.query
		} //end of first else
	});// end of pool.connect
});//end of router.get



module.exports = router;
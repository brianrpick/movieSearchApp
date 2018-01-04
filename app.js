//&apikey=thewdb
//general http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb
//search http://www.omdbapi.com/?s=golden&apikey=thewdb
var express = require('express');
var app = express();
var request = require('request');

app.set("view engine", "ejs");


app.get("/", function(req, res) {
	res.render("search"); 
})
app.get("/results", function(req, res) {
	var keyword = req.query.keyword;
	var url = 'http://www.omdbapi.com/?s=' + keyword + '&apikey=thewdb';
	request(url, function(err, response, body) {
		if (!err && response.statusCode == 200) {
			var parsedBody = JSON.parse(body)
			res.render("results", {body: parsedBody});
		} else {
			res.render("search");
			console.log("There was an error in the search!");
		}
	});
})




app.listen(3000, function() {
	console.log("Serving app on port 3000");
})
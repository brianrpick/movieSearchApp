//&apikey=thewdb
//general http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb
//search http://www.omdbapi.com/?s=golden&apikey=thewdb
var express = require('express');
var app = express();
var request = require('request');

app.set("view engine", "ejs");

app.get("/results", function(req, res){
	request('http://www.omdbapi.com/?s=golden&apikey=thewdb ', function(err, response, body) {
		if (!err && response.statusCode == 200) {
			var parsedBody = JSON.parse(body)
			res.render("results", {body: parsedBody});
		}
	});
})




app.listen(3000, function() {
	console.log("Serving app on port 3000");
})
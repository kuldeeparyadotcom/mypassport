
//The only purpose of this route is to demonstrate how to call api with nodejs

var express = require('express');
var router = express.Router();
var request = require('request');

var result = null;

//I have aother node js app running (name: readfile app)
//Let's call one of the service of that app and capture results
request('http://192.168.55.55:3000/content', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage.
    result = body;
  }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.setHeader('Content-Type', 'application/json');
  res.send(result);
});

module.exports = router;
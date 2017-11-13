//Main Modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Clients
const app = express();
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//Routes
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname+"/index.html"));
});

app.post("/", urlencodedParser, function(request, response) {
  console.log(request.body);
  response.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/logo.ico", function(request, response) {
  response.sendFile(path.join(__dirname+"/out and up.ico"));
});

app.get("/quiz.swf", function(request, response) {
  response.sendFile(path.join(__dirname+"/quiz.swf"));
});

//404
app.get("*", function(request, response) {
  response.sendFile(path.join(__dirname+"/404.html"));
});

//
app.listen(process.env.PORT || 8000, function() {
  console.log("Server running")
});

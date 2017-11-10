//Main Modules
const express = require("express");
const path = require("path");

//Clients
const app = express();

//Routes
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/logo.ico", function(request, response) {
  response.sendFile(path.join(__dirname+"/out and up.ico"));
});

//404
app.get("*", function(request, response) {
  response.sendFile(path.join(__dirname+"/404.html"));
});

//
app.listen(process.env.PORT || 8000, function() {
  console.log("Server running")
});

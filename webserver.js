//Main Modules
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const path = require("path");

//Clients
const app = express();
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
                user: "outandup28@gmail.com", // Your email id
                pass: "barackputin" // Your password
        }
});

//Routes
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname+"/index.html"));
});

app.post("/", urlencodedParser, function(request, response) {
  let mailOptions = {
    from: "outandup28@gmail.com", // sender address
    to: "outandup28@gmail.com", // list of receivers
    subject: "Out and Up: Contact Form", // Subject line
    text: "Name: " + request.body.name + "\nEmail: " + request.body.email + "\nDescription: " + request.body.description
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    };
  });
  response.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/logo.ico", function(request, response) {
  response.sendFile(path.join(__dirname+"/out and up.ico"));
});

app.get("/OutUpMap.jpg", function(request, response) {
  response.sendFile(path.join(__dirname+"/OutUpMap.jpg"));
});

app.get("/Archery.jpg", function(request, response) {
  response.sendFile(path.join(__dirname+"/Archery.jpg"));
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

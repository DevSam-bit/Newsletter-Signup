//   jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

 const app = express();

 app.use(express.static("public"));
 app.use(bodyParser.urlencoded({extended: true}));

 app.get("/", function(req, res){
     res.sendFile(__dirname + "/signup.html");
 });

 app.post("/", function(req, res){
   
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.eName;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    https.request(url, options, function(response) {
        
    })

    console.log(firstName, lastName, email);
 });

 app.listen(3000, function() {
     console.log("Server is running on port 3000");
 });


//  API KEY
// 5e42319a36c7870ea2c26d7808d1c463-us7

// LIST ID
// 2eaf82ab9a



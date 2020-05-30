//jshint eversion:6
require('dotenv').config();
//Packages
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const chalk = require('chalk');
var nodeMailer = require('nodemailer');
const cors = require('cors');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());


//Define routes 
app.route("/message")
    .post(function(req, res) {
        console.log(req.body)
        var fName = req.body.fName
        var lName = req.body.lName
        var email = req.body.email
        var message = req.body.message
        var city = req.body.city
        
      
        const userEmail=process.env.EMAIL
        const userPassword=process.env.PASSWORD
      
        //Step 1
        let transporter = nodeMailer.createTransport({
          host: "smtp.gmail.com",
          port:'465',
          secure:'false',
          requireTLS:'false',
          auth: {
            user:userEmail,
            pass:userPassword
          }
        });
        //Step 2
        let mailOptions = {
          from: 'blainemcmahonuml@gmail.com', // sender address
          to: 'blainemcmahonuml@gmail.com', // list of receivers
          subject: fName, // Subject line
          text: message + 'email----->' + email + 'phone---->' + 'first name---->' + fName + 'last name---->' + lName + city// plain text body
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error)
          } else {
            console.log("success")
        }
      
          })
        res.send("success")
      
      
      });

      app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname+'/client/build/index.html'))
    })
    
    

//Start server on local port
app.listen(process.env.PORT || 2000, function() {
    console.log(chalk.green("Server has started"));
  })
  
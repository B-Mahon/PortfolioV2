//jshint eversion:6
require('dotenv').config();
//Packages
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const chalk = require('chalk');
const mongoose = require("mongoose");
const cors = require('cors');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("path.join"(__dirname,'client/build')));
app.use(cors());
//mongoose.connect("mongodb://localhost:27017/CRUDdb")
mongoose.connect("mongodb+srv://Blaine:dogbark@cluster0-r8hfn.mongodb.net/test?retryWrites=true&w=majority/CRUDdb")
mongoose.set("useCreateIndex", true);

//Create schema 
const userSchema = new mongoose.Schema ({
    name:String,
    post:{
        title:String,
        body:String
        }
  });
//Define the model
const User = new mongoose.model("User",userSchema);

//Define routes 
app.route("/user")
    .get(function(req,res){
        User.find({},function(err,results){
            if (err) return console.log(chalk.redBright(err))
            res.send(results)
            })
        })
    .post(function(req,res){
            console.log(req.body);
            
            const newUser = new User({
                name:req.body.name,
                post:{
                    title:req.body.title,
                    body:req.body.post
                }
            })
            newUser.save(function (err, user) {
                if (err) return res.send((err))
                res.send("success")
                })
            })
    .delete(function(req,res){
        User.deleteMany(function(err){
            if (err) return res.send((err))
            res.send("success")
            })
        });
////////////////////////////////Requests Targeting a Specific Article//////////////////////////////////////////
    //READ (GET) Specific User
    app.route("/user/:postTitle")
        .get(function(req,res){
            const userTitle = req.params.postTitle
            User.findOne({'post.title':userTitle},function(err,results){
                if (err) return res.send((err));
                res.send("Found")
            })
        })
        .put(function(req,res){
            User.updateOne({'post.title':req.params.postTitle},
            {name:req.body.name,post:{title:req.body.title,body:req.body.post}},{overwrite:true},
            function(err){
                if (err) return res.send((err))
                res.send("patched")
            })
        })
        .patch(function(req,res){
            User.update({'post.title':req.params.postTitle},
            {$set:{
                "name":req.body.name,
                "post.title":req.body.titl,
                "post.body":req.body.post
            }
            },function(err){
                if (err) return res.send((err))
                res.send("updated")
            })
        })
        .delete(function(req,res){
            User.remove({'post.title':req.params.postTitle},function(err){
                if (err) return res.send((err))
                res.send("Done")
             })
        });

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})


//Start server on local port
app.listen(process.env.PORT || 2000, function() {
    console.log(chalk.green("Server has started"));
  })
  
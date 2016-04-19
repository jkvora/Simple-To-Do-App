//Require Modules
var express=require("express");
var config = require('./config');
var path = require('path');
var routes=require('./routes');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); // for parsing multipart/form-data
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var cookieParser= require('cookie-parser');
var session=require('express-session');
var mongoose=require('mongoose'); //Mongo Uri

var db=mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

//Init Express App
var app=express();

//Mongoose Signup Schema
var UserSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    Source:String
});

//Modelling RegisterSchema
var UserModel=mongoose.model("UserModel",UserSchema);

//Save Example Data
var sampleData=new UserModel();
sampleData.username="jalak";
sampleData.email="vorajalak@yahoo.co.in";
sampleData.password="abcdef";
sampleData.Source="local";
sampleData.save();

//Express sessions
app.use(session({
  secret:"this is the secret key",
  resave:true,
  saveUninitialized:false
}));
//Cookie Parser
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

/*Use Middleware (Between header to hTTP actions)*/
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//passport startegy
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },function(username,password,done){
  console.log("username:"+username);
  console.log("password:"+password);

  UserModel.findOne({email:username,password:password},function(err,user)
  {
    if(user){
        return done(null,user);
    }
    return done(null,false,{message:'unable to login'});
  });
}));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
   done(null, id);
});

// serve the static public files
app.use(express.static(path.join(__dirname, '../public')));
app.use('/',routes);


//Listen TO Port mentioned in config file
var port=config.PORT;
app.listen(port,function() {
console.log("Server is running at port no :"+ port);
});

//Require Modules
var express=require("express");
var config = require('./config');
var path = require('path');
var routes=require('./routes');

//Init Express App
var app=express();


/*Use Middleware (Between header to hTTP actions)*/


// serve the static public files
app.use(express.static(path.join(__dirname, '../public')));


//Listen TO Port mentioned in config file
var port=config.PORT;
app.listen(port,function() {
  console.log("Server is running at port no :"+ port);
});

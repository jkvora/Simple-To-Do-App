var express=require('express');
var router=express.Router();
var passport=require('passport')

router.post('/login',passport.authenticate("local"),function(req,res){
  console.log("Logged In");
  console.log(req.body);
});

module.exports=router;

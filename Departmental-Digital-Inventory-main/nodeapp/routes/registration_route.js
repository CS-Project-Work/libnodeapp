var express = require('express');
var router = express.Router();
var db=require('../database');
var alert = require('alert');  
// to display registration form 
router.get('/register', function(req, res, next) {
  res.render('registration-form');
});

// to store user input detail on post request
router.post('/register', function(req, res, next) {
    
    inputData ={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_address: req.body.email_address,
        usn: req.body.usn,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    }
// check unique email address
var sql='SELECT * FROM stud_registration WHERE email_address =?';
db.query(sql, [inputData.email_address] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     alert(inputData.email_address+ "already exists");
 }
 else if(inputData.confirm_password != inputData.password){
   alert("Password & Confirm Password do not match");
   res.redirect('register');
 }
 else{
    // save users data into database
    var sql = 'INSERT INTO stud_registration VALUES (?,?,?,?,?)';
    var values = [req.body.first_name, req.body.last_name, req.body.usn,req.body.email_address,req.body.password];
   db.query(sql, values, function (err, data) {
      if (err) throw err;
           });
     alert("Your are successfully registered,please login");
     res.redirect('login');
 }

})
 
});


router.get('/register1', function(req, res, next) {
    res.render('registration-form');
  });
  
  // to store user input detail on post request
  router.post('/register1', function(req, res, next) {
      
      inputData ={
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email_address: req.body.email_address,
          password: req.body.password,
          confirm_password: req.body.confirm_password
      }
  // check unique email address
  var sql='SELECT * FROM teacher_registration WHERE email_address =?';
  db.query(sql, [inputData.email_address] ,function (err, data, fields) {
   if(err) throw err
   if(data.length>1){
       alert(inputData.email_address+ "already exists");
   }
   else if(inputData.confirm_password != inputData.password){
     alert("Password & Confirm Password do not match");
     res.redirect('register1');
   }
   else{
      // save users data into database
      var sql = 'INSERT INTO teacher_registration VALUES (?,?,?,?)';
      var values = [req.body.first_name, req.body.last_name,req.body.email_address,req.body.password];
     db.query(sql, values, function (err, data) {
        if (err) throw err;
             });
       alert("Your are successfully registered,please login");
       res.redirect('login');
   }
  
  })
   
  });
  
module.exports = router;
var express = require('express');
var router = express.Router();
var db=require('../database');
var alert = require('alert');  

router.get('/feedback', function(req, res, next) {
  res.render('std-feedback');
});

router.get('/fty-feedback-route', function(req, res, next) {
    res.render('faculty-feedback');
  });
  
// to store user input detail on post request
router.post('/feedback', function(req, res, next) {
    
    inputData ={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_address: req.body.email_address,
        rating: req.body.rating,
        availability: req.body.availability,
        ease_of_access: req.body.ease_of_access,
        comments: req.body.comments
    }
var sql='SELECT * FROM feedback WHERE email_address =?';
db.query(sql, [inputData.email_address] ,function (err, data, fields) {
 if(err) throw err
 else{
    // save users data into database
    var sql = 'INSERT INTO feedback VALUES (?,?,?,?,?,?,?)';
    var values = [req.body.first_name, req.body.last_name,req.body.email_address,req.body.rating,req.body.availability,req.body.ease_of_access,req.body.comments];
   db.query(sql, values, function (err, data) {
      if (err) throw err;
           });
     res.redirect('std_das');
 }

})
 
});

module.exports = router;
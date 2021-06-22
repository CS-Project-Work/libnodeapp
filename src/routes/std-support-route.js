var express = require('express');
var router = express.Router();
var db=require('../database');
 

router.get('/std-support-route', function(req, res, next) {
  res.render('std-contact');
});

router.post('/support', function(req, res, next) {
    
  inputData ={
      name: req.body.name,
      email_address: req.body.email_address,
      phone_number: req.body.phone_number,
      message: req.body.message,
  }
var sql='SELECT * FROM support WHERE email_address =?';
db.query(sql, [inputData.email_address] ,function (err, data, fields) {
if(err) throw err
else{
  // save users data into database
  var sql = 'INSERT INTO support VALUES (?,?,?,?)';
  var values = [req.body.name,req.body.email_address,req.body.phone_number,req.body.message];
 db.query(sql, values, function (err, data) {
    if (err) throw err;
         });
   res.redirect('std-contact');
}

})

});

module.exports = router;
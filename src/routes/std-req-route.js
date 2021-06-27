var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/std-req-route', function(req, res, next) {
  res.render('std-req');
});

router.get('/fty-req-route', function(req, res, next) {
  res.render('faculty-req');
});

router.post('/request-std', function(req, res, next) {
    
  inputData ={
      name: req.body.name,
      email_address: req.body.email_address,
      book_name: req.body.book_name,
      author_name: req.body.author_name,
      semester: req.body.semester,
      subject: req.body.subject,
      description: req.body.description,
  }
var sql='SELECT * FROM request WHERE email_address =?';
db.query(sql, [inputData.email_address] ,function (err, data, fields) {
if(err) throw err
else{
  // save users data into database
  var sql = 'INSERT INTO request VALUES (?,?,?,?,?,?,?)';
  var values = [req.body.name,req.body.email_address,req.body.book_name,req.body.author_name,req.body.semester,req.body.subject,req.body.description];
 db.query(sql, values, function (err, data) {
    if (err) throw err;
         });
   res.redirect('/std-req-route');
}

})

});

router.post('/request-fty', function(req, res, next) {
    
  inputData ={
      name: req.body.name,
      email_address: req.body.email_address,
      book_name: req.body.book_name,
      author_name: req.body.author_name,
      semester: req.body.semester,
      subject: req.body.subject,
      description: req.body.description,
  }
var sql='SELECT * FROM request WHERE email_address =?';
db.query(sql, [inputData.email_address] ,function (err, data, fields) {
if(err) throw err
else{
  // save users data into database
  var sql = 'INSERT INTO request VALUES (?,?,?,?,?,?,?)';
  var values = [req.body.name,req.body.email_address,req.body.book_name,req.body.author_name,req.body.semester,req.body.subject,req.body.description];
 db.query(sql, values, function (err, data) {
    if (err) throw err;
         });
   res.redirect('/fty-req-route');
}

})

});


module.exports = router;
var express = require('express');
var router = express.Router();
var db=require('../database');
var alert = require('alert');  
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/login', function(req, res){
    var emailAddress = req.body.email_address;
    var password = req.body.password;
    var sql='SELECT * FROM stud_registration WHERE email_address =? AND password =?';
    db.query(sql, [emailAddress, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.emailAddress= emailAddress;
            res.redirect('std_das');
        }else{
            alert("Your Email Address or password is wrong");
            res.redirect('login');
        }
    })
});

router.get('/login1', function(req, res, next) {
    res.render('login1');
  });
  router.post('/login1', function(req, res){
      var emailAddress = req.body.email_address;
      var password = req.body.password;
      var sql='SELECT * FROM teacher_registration WHERE email_address =? AND password =?';
      db.query(sql, [emailAddress, password], function (err, data, fields) {
          if(err) throw err
          if(data.length>0){
              req.session.loggedinUser= true;
              req.session.emailAddress= emailAddress;
              res.redirect('faculty_das');
          }
          else{
              alert("Your Email Address or password is wrong");
              res.redirect('login');
          }
      })
  });
module.exports = router;
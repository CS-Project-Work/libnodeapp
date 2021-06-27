var express = require('express');
var router = express.Router();
var db=require('../database');
 
router.get('/std/:sem', function(req, res, next) {
 if(req.session.loggedinUser){
   var email = req.session.emailAddress;
   var sem = req.params.sem; 
   var sql = "SELECT * FROM student WHERE email_address='"+ email +"'";
   var sql1 = "select count(usn) AS usncount from stubookissued where usn = (SELECT usn FROM student WHERE email_address='"+ email +"')";
   var sql2 = "select * from stubookissued where usn = (SELECT usn FROM student WHERE email_address='"+ email +"')";
   var sql3 = "SELECT count(semester) AS sembookscount FROM stocks WHERE semester='"+ sem +"'";
   db.query(sql, function(err, data, fields) {
     if (err) throw err;
     console.log(data);
     db.query(sql1, function(err, data1, fields) {
      if (err) throw err;
      console.log(data1);
      db.query(sql2, function(err, data2, fields) {
        if (err) throw err;
        console.log(data2);
        db.query(sql3, function(err, data3, fields) {
          if (err) throw err;
          console.log(data3);
     res.render('std', {sems: sem ,item: data,data1,item2:data2,data3});
 });
});
});
});
 }
 else{
        res.redirect('/login');
    }
});

router.get('/std-books-issued', function(req, res, next) {
  if(req.session.loggedinUser){
    var email = req.session.emailAddress;
    var sql = "SELECT * FROM student WHERE email_address='"+ email +"'";
    var sql1 = "SELECT s1.bookname,s1.semester,s1.subject_name,s.bookid from stubookissued s, stocks s1 where s.bookid = s1.bookid and s.usn =(SELECT usn FROM student WHERE email_address='"+ email +"')";
    var sem = req.params.sem; 
    db.query(sql, function(err, data, fields) {
      if (err) throw err;
      console.log(data);
      db.query(sql1, function(err, data1, fields) {
       if (err) throw err;
       console.log(data1);
      res.render('std-books-issued', {sems: sem ,item: data,item1: data1});
  });
 });
  }
  else{
         res.redirect('/login');
     }
 });

router.get('/std-search-panel', function(req, res, next) {
  if(req.session.loggedinUser){
      res.render('std_bookse');
  }
  else{
      res.redirect('/login');
  }
});

router.get('/faculty-book-search/:sem', function(req, res, next) {
  if(req.session.loggedinUser){
    var email = req.session.emailAddress;
    var sem = req.params.sem;
    var sql = "SELECT * FROM faculty WHERE email_address='"+ email +"'";
    var sql1 = "select count(fty_id) AS ftyidcount from ftybookissued where fty_id = (SELECT fty_id FROM faculty WHERE email_address='"+ email +"')";
    var sql2 = "select * from ftybookissued where fty_id = (SELECT fty_id FROM faculty WHERE email_address='"+ email +"')";
    var sql3 = "SELECT count(semester) AS sembookscount FROM stocks WHERE semester='"+ sem +"'";
    db.query(sql, function(err, data, fields) {
      if (err) throw err;
      console.log(data);
      db.query(sql1, function(err, data1, fields) {
       if (err) throw err;
       console.log(data1);
       db.query(sql2, function(err, data2, fields) {
         if (err) throw err;
         console.log(data2);
         db.query(sql3, function(err, data3, fields) {
           if (err) throw err;
           console.log(data3);
      res.render('std', {sems: sem ,item: data,data1,item2:data2,data3});
  });
 });
 });
 });
  }
  else{
         res.redirect('/login');
     }
 });


router.get('/fty-books-issued', function(req, res, next) {
  if(req.session.loggedinUser){
    var email = req.session.emailAddress;
    var sql = "SELECT * FROM faculty WHERE email_address='"+ email +"'";
    var sql1 = "SELECT s1.bookname,s1.semester,s1.subject_name,s.bookid from ftybookissued s, stocks s1 where s.bookid = s1.bookid and s.fty_id =(SELECT fty_id FROM faculty WHERE email_address='"+ email +"')";
    var sem = req.params.sem; 
    db.query(sql, function(err, data, fields) {
      if (err) throw err;
      console.log(data);
      db.query(sql1, function(err, data1, fields) {
       if (err) throw err;
       console.log(data1);
      res.render('faculty-books-issued', {sems: sem ,item: data,item1: data1});
  });
 });
  }
  else{
         res.redirect('/login');
     }
 });
 
 router.get('/fty-search-panel', function(req, res, next) {
  if(req.session.loggedinUser){
      res.render('faculty_bookse');
  }
  else{
      res.redirect('/login');
  }
});

module.exports = router;
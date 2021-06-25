var express = require('express');
var router = express.Router();
var db=require('../database');
 
router.get('/books_issued', function(req, res, next) {
 if(req.session.loggedinUser){
   var sql1 = "SELECT s1.bookname,s1.semester,s1.subject_name,s.bookid,s2.first_name,s2.last_name,s2.usn from stubookissued s, stocks s1,student s2 where s.bookid = s1.bookid and s.usn =s2.usn";
   var sql2 = "SELECT s1.bookname,s1.semester,s1.subject_name,s.bookid,s2.first_name,s2.last_name,s2.fty_id from ftybookissued s, stocks s1,faculty s2 where s.bookid = s1.bookid and s.fty_id =s2.fty_id";
   db.query(sql1, function(err, data, fields) {
     if (err) throw err;
     console.log(data);
     db.query(sql2, function(err, data1, fields) {
      if (err) throw err;
      console.log(data1);
     res.render('lib-books-issued', {item: data,item1: data1});
 });
});
 }
 else{
        res.redirect('/login');
    }
});
module.exports = router;
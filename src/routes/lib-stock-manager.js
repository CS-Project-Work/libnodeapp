var express = require('express');
var router = express.Router();

router.get('/stockmanager/:sem', function(req, res, next) {
   var sem = req.params.sem; 

        res.render('stockmanager', { sems : sem })
  
});


router.get('/manager', function(req, res, next) {
        var sem = req.params.sem; 
     
             res.render('mang', { sems : sem })
       
     });

router.get('/modifystocks', function(req, res, next) {
        var sem = req.params.sem; 
     
             res.render('lib-modify-books', { sems : sem })
       
     });

router.post('/add', function(req, res, next) {
      
        inputData ={
            author: req.body.author,
            bookname: req.body.bookname,
            numberofstocks: req.body.numberofstocks,
            book_img: req.body.book_img,
            semester: req.body.semester,
            subject_name: req.body.subject_name
        }
    
    db.query(function (err, data, fields) {
     if(err) throw err
     else{
        // save users data into database
        var sql = 'INSERT INTO stocks VALUES (?,?,?,?,?,?)';
        var values = [req.body.author, req.body.bookname,req.body.numberofstocks,req.body.book_img,req.body.semester,req.body.subject_name];
       db.query(sql, values, function (err, data) {
          if (err) throw err;
               });
         res.redirect('admin_das');
     }
    
    })
    });
  
    router.post('/delete', function(req, res, next) {
        
      inputData ={
          bookid: req.body.bookid
      }
  
  db.query(function (err, data, fields) {
   if(err) throw err
   else{
      // save users data into database
      var sql = 'DELETE FROM stocks where bookid =?';
      var values = [req.body.bookid];
     db.query(sql, values, function (err, data) {
        if (err) throw err;
             });
       res.redirect('admin_das');
   }
  
  })
  });
  
     module.exports = router;


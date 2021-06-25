var express = require('express');
var router = express.Router();
var db=require('../database');
 

router.get('/stud_details', function(req, res, next) {

    var sql='SELECT * FROM student';
    db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.render('lib-std-details', {title: 'Feedback details',
    item1: data
   });
  });
});

router.get('/faculty_details', function(req, res, next) {

    var sql='SELECT * FROM faculty';
    db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.render('lib-fac-details', {title: 'Feedback details',
    item: data
   });
  });
});

module.exports = router;
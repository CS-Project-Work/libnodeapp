var express = require('express');
var router = express.Router();
var db=require('../database');
 

router.get('/lib-req-route', function(req, res, next) {
  res.render('lib-book-reqs');
});

router.get('/dispreqs', function(req, res, next) {
    var sql='SELECT * FROM request';
    db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.render('lib-book-reqs', {title: 'Deatils of books requested',
    item1: data
   });
  });
});

module.exports = router;
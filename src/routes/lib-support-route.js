var express = require('express');
var router = express.Router();
var db=require('../database');


router.get('/lib-support-route', function(req, res, next) {
  res.render('lib-support-reqs');
});

router.get('/support', function(req, res, next) {
    var sql='SELECT * FROM support';
    db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.render('lib-support-reqs', {title: 'Deatils of support requests',
    item: data
   });
  });
});

module.exports = router;


var express = require('express');
var router = express.Router();
var db=require('../database');
 

router.get('/lib-feedback-route', function(req, res, next) {

    var sql='SELECT * FROM feedback';
    db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.render('lib-feedback', {title: 'Feedback details',
    item: data
   });
  });
});

module.exports = router;
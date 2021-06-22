var express = require('express');
var router14 = express.Router();
var db = require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router14.get('/fac-list', function(req, res, next) {
    var sql = 'SELECT * FROM teacher_registration';
    db.query(sql, function(err, data, fields) {
        if (err) throw err;
        res.render('fac-list', { title: 'User List', facData: data });
    });
});
module.exports = router14;

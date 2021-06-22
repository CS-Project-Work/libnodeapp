var express = require('express');
var router14 = express.Router();
var db = require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router14.get('/user-list', function(req, res, next) {
    var sql = 'SELECT * FROM stud_registration';
    db.query(sql, function(err, data, fields) {
        if (err) throw err;
        res.render('user-list', { title: 'User List', userData: data });
    });
});
module.exports = router14;

var express = require('express');
var router = express.Router();
var db = require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/stud_details', function(req, res, next) {
    if (req.session.loggedinUser) {
        var sql = "SELECT * FROM `student`";
        db.query(sql, function(err, data1, fields) {
            if (err) throw err;
            res.render('lib-std-details', { title: 'User List', item1: data1 });
        });
    } else {
        res.redirect('/login');
    }
});

router.get('/faculty_details', function(req, res, next) {
    if (req.session.loggedinUser) {
        var sql = "SELECT * FROM `faculty`";
        db.query(sql, function(err, data, fields) {
            if (err) throw err;
            res.render('lib-fac-details', { title: 'User List', item: data });
        });
    } else {
        res.redirect('/login');
    }
});
module.exports = router;
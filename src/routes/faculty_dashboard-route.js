var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/faculty_das', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('faculty_das',{email:req.session.emailAddress})
    }
    else{
        res.redirect('/login');
    }
});


router.get('/fty-res-route', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('faculty_res')
    }
    else{
        res.redirect('/login');
    }
});

router.get('/fty-profile', function(req, res, next) {
    if (req.session.loggedinUser) {
        var email = req.session.emailAddress;
        var sql = "SELECT * FROM `faculty` WHERE `email_address`='" + email + "'";
        db.query(sql, function(err, data, fields) {
            if (err) throw err;
            res.render('faculty-profile', { item: data });
        });
    } else {
        res.redirect('/login');
    }
});

router.get('/fty-fine-cal', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('faculty-fine')
    }
    else{
        res.redirect('/login');
    }
});

router.get('/fty-about', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('faculty-about')
    }
    else{
        res.redirect('/login');
    }
});
module.exports = router;

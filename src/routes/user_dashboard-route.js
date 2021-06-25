var express = require('express');
var router = express.Router();

router.get('/std_das', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('std_das',{email:req.session.emailAddress})
    }
    else{
        res.redirect('/login');
    }
});

router.get('/std-res-route', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('std_resou')
    }
    else{
        res.redirect('/login');
    }
});

router.get('/fine-cal', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('std-fine')
    }
    else{
        res.redirect('/login');
    }
});

router.get('/std-about', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('std-about')
    }
    else{
        res.redirect('/login');
    }
});

router.get('/std-profile', function(req, res, next) {
    if (req.session.loggedinUser) {
        var email = req.session.emailAddress;
        var sql = "SELECT * FROM `student` WHERE `email_address`='" + email + "'";
        db.query(sql, function(err, data, fields) {
            if (err) throw err;
            res.render('std-profile', { item: data });
        });
    } else {
        res.redirect('/login');
    }
});
module.exports = router;
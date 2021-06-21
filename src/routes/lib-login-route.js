var express = require('express');
var router = express.Router();
var db=require('../database');
var alert = require('alert');  
/* GET users listing. */
router.get('/lib-login', function(req, res, next) {
  res.render('librarianlogin');
});
router.post('/lib-login', function(req, res){
    var emailAddress = req.body.email_address;
    var password = req.body.password;
    var sql='SELECT * FROM librarian_registration WHERE email_address =? AND password =?';
    db.query(sql, [emailAddress, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.emailAddress= emailAddress;
            res.redirect('/admin_das');
        }else{
            alert("Your Email Address or password is wrong");
            res.redirect('login');
        }
    })
})
module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/admin_das', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('admin_das',{email:req.session.emailAddress})
    }
    else{
        res.redirect('/login');
    }
});
module.exports = router;
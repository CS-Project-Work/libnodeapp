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
module.exports = router;
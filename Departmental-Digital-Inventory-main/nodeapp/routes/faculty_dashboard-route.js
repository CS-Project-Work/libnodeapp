var express = require('express');
var router = express.Router();

router.get('/faculty_das', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('faculty_das',{email:req.session.emailAddress})
    }
    else{
        res.redirect('/login');
    }
});
module.exports = router;

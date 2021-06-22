var express = require('express');
var router = express.Router();

router.get('/std/:sem', function(req, res, next) {
   var sem = req.params.sem; 

        res.render('std', { sems : sem })
  
});
module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/stockmanager/:sem', function(req, res, next) {
   var sem = req.params.sem; 

        res.render('stockmanager', { sems : sem })
  
});
module.exports = router;
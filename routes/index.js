var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Login', {
    title: 'Express',
    css:"login.css"
 });
});

module.exports = router;
